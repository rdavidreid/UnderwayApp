var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var ApiUtil = require('../util/api_util');
var RewardDetail = require('./RewardDetail');
var UserStore = require('../stores/UserStore');
var Modal = require('react-modal');
var History = require('react-router').History;

// var appElement = document.getElementById('content');


var ProjectDetail = React.createClass({
  mixins: [History],

  getStateFromStore: function() {
    return({
      Project: ProjectStore.findById(parseInt(this.props.params.id)),
      modalIsOpen: false
    });
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSingleProject(parseInt(this.props.params.id));
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchSingleProject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  deleteProject: function() {
    ApiUtil.destroyProject(this.state.Project);
    this.history.push('/');
  },

  editProject: function() {
    this.history.push('/editproject/' + this.state.Project.project.id);
  },

  editRewards: function() {
    this.history.push('/editreward/' + this.state.Project.project.id);
  },

  _formatTime: function(t){

    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.round( (t - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
    if( d < 0){
      d = 0;
    }
    return d;
  },

  _imgError: function(){
    this.refs.indexItemImage.src = "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457053272/icgwgkmu2r7k05echr1q.png";
  },

  render: function() {
    Modal.setAppElement(document.body);
    var customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        borderRadius          : '10px'
      },
        overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.5)'
      }
    };


    if (this.state.Project === undefined ||
    this.state.Project.project === undefined){
      return(<p>Loading...</p>);
    }

    if (UserStore.currentUser().user_id == this.state.Project.project.author_id){
      var btnDelete = (<button
        className="button red confirm-delete-project-button"
        data-dismiss="modal"
        onClick={this.deleteProject}>Delete</button>);
      var btnEdit =   (<button
        className="button blue"
        onClick={this.editProject}>Edit</button>);
      var btnEditRewards = (<button
        className="button blue"
        onClick={this.editRewards}>Add Rewards</button>);
      var btnModalDelete = (<button
        type="button"
        className="button blue delete-project-button"
        onClick={this.openModal}>Delete</button>);
      var btnDoNotDelete = (<button
        type="button"
        className="button blue delete-project-button"
        onClick={this.closeModal}>Go Back</button>);
    }
    else {
      btnDelete = "";
      btnEdit = "";
      btnEditRewards = "";
    }

    var timeRemainingInt = (Date.parse(this.state.Project.project.campaign_end_date) - new Date());
    var daysToGo = this._formatTime(timeRemainingInt);

    var rewards = "";
    var endOfFundingMsg = "";

    if (this.state.Project.project.rewards === undefined){
      return null;
    }
    else if(timeRemainingInt <= 0) {
      if (this.state.Project.project.current_funding > this.state.Project.project.funding_goal){
        endOfFundingMsg = (
          <div className="funding-over">
            <h3 className="funding-success">Success!</h3>
            <p>This project was successfully funded.</p>
          </div>
        );
      }
      else{
        endOfFundingMsg =(
          <div className="funding-over">
            <h3 className="funding-failure">Unsuccessful</h3>
            <p>This project did not reach its goal in the provided time limit</p>
          </div>);
      }
      rewards = [];
      rewards = this.state.Project.project.rewards.map(function(el) {
        return(<RewardDetail reward={el} clickerFunc="expired"/>);
      });
    }
    else {
      rewards = [];
      rewards = this.state.Project.project.rewards.map(function(el) {
        return(<RewardDetail reward={el} />);
      });
    }
    return(
    <div>
      <h2 className="project-title">{this.state.Project.project.title}</h2>
      <h4 className = "project-title">{"By: " + this.state.Project.project.author.username}</h4>

      <br />
      <br />

      <div className="row details-top">

        <div id="ProjectDetailPane" className="col-md-8">

          <img
            ref="indexItemImage"
            className="project-detail-image"
            src={this.state.Project.project.img_url}
            onError={this._imgError}
            >
          </img>
          <p className="blurb">Blurb:{this.state.Project.project.blurb}</p>
          <br/>
          {btnEdit}{btnModalDelete}{btnEditRewards}

          <Modal
            className="reward-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2>Delete Project?</h2>
            <br />
            <div className="modal-buttons">
              {btnDoNotDelete}{btnDelete}
            </div>
          </Modal>

          <br/>
          <br/>
        </div>

        <div className="col-md-4">

          <h3>{this.state.Project.project.backers}</h3>
          <p>backers</p>
          <h3>{"$" + this.state.Project.project.current_funding}</h3>
          <p>pleged of {"$" + this.state.Project.project.funding_goal}</p>
          <h3>{daysToGo}</h3>
          <p>days to go</p>
          <br />

          <h6>This project will only be funded if at least
            {" $" + this.state.Project.project.funding_goal} is raised by
            {" " + this.state.Project.project.campaign_end_date}
          </h6>

          {endOfFundingMsg}

        </div>

      </div>

      <div className="row row details-bottom">

        <div className="col-sm-8 col-md-8">
          <section
            className="details-body"
            dangerouslySetInnerHTML={{__html: this.state.Project.project.details}} />
        </div>

        <div className="col-sm-4 col-md-4">
          <br></br>
          {rewards}
        </div>

      </div>

    </div>
    );
  }
});

module.exports = ProjectDetail;
// <div>
//   <h2 className="project-title">{this.state.Project.project.title}</h2>
//   <h4 className = "project-title">{"By: " + this.state.Project.project.author.username}</h4>
//
//   <br />
//   <br />
//
//   <div className="row details-top">
//
//     <div id="ProjectDetailPane" className="col-md-8">
//
//       <img
//         ref="indexItemImage"
//         className="project-detail-image"
//         src={this.state.Project.project.img_url}
//         onError={this._imgError}
//         >
//       </img>
//       <p className="blurb">Blurb:{this.state.Project.project.blurb}</p>
//       <br/>
//       {btnEdit}{btnModalDelete}{btnEditRewards}
//
//       <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//               <h4 className="modal-title" id="myModalLabel">Delete {this.state.Project.project.title} ?</h4>
//             </div>
//
//             <div className="modal-footer">
//               <button type="button" className="button blue" data-dismiss="modal">No</button>
//               {btnDelete}
//
//             </div>
//           </div>
//         </div>
//       </div>

          // <Modal
          //   isOpen={this.state.modalIsOpen}
          //   onRequestClose={this.closeModal}
          //   style={customStyles} >
          //
          //   <h2>Hello</h2>
          //   <button onClick={this.closeModal}>close</button>
          //   <div>I am a modal</div>
          //   <form>
          //     <input />
          //     <button>tab navigation</button>
          //     <button>stays</button>
          //     <button>inside</button>
          //     <button>the modal</button>
          //   </form>
          // </Modal>


//
//
//
//
//
//
//
//
//
//
//
//
//       <br/>
//       <br/>
//     </div>
//
//     <div className="col-md-4">
//
//       <h3>{this.state.Project.project.backers}</h3>
//       <p>backers</p>
//       <h3>{"$" + this.state.Project.project.current_funding}</h3>
//       <p>pleged of {"$" + this.state.Project.project.funding_goal}</p>
//       <h3>{daysToGo}</h3>
//       <p>days to go</p>
//       <br />
//
//       <h6>This project will only be funded if at least
//         {" $" + this.state.Project.project.funding_goal} is raised by
//         {" " + this.state.Project.project.campaign_end_date}
//       </h6>
//
//       {endOfFundingMsg}
//
//     </div>
//
//   </div>
//
//   <div className="row row details-bottom">
//
//     <div className="col-sm-8 col-md-8">
//       <section
//         className="details-body"
//         dangerouslySetInnerHTML={{__html: this.state.Project.project.details}} />
//     </div>
//
//     <div className="col-sm-4 col-md-4">
//       <br></br>
//       {rewards}
//     </div>
//
//   </div>
//
// </div>




// <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//         <h4 className="modal-title" id="myModalLabel">Delete {this.state.Project.project.title} ?</h4>
//       </div>
//
//       <div className="modal-footer">
//         <button type="button" className="button blue" data-dismiss="modal">No</button>
//         {btnDelete}
//
//       </div>
//     </div>
//   </div>
// </div>
