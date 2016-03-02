var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var ApiUtil = require('../util/api_util');
var RewardDetail = require('./RewardDetail');
var UserStore = require('../stores/UserStore');
var History = require('react-router').History;



var ProjectDetail = React.createClass({
  mixins: [History],

  getStateFromStore: function() {
    return({Project: ProjectStore.findById(
      parseInt(this.props.params.id)
    )});
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

  render: function() {



    if (this.state.Project === undefined ||
    this.state.Project.project === undefined){
      return(<p>Loading...</p>);
    }

    if (UserStore.currentUser().user_id == this.state.Project.project.author_id){
      var btnDelete = (<button
        className="button blue"
        onClick={this.deleteProject}>Delete</button>);
      var btnEdit =   (<button
        className="button blue"
        onClick={this.editProject}>Edit</button>);
      var btnEditRewards = (<button
        className="button blue"
        onClick={this.editRewards}>Add Rewards</button>);
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
            className="project-detail-image"
            src={this.state.Project.project.img_url}>
          </img>
          <p className="blurb">Blurb:{this.state.Project.project.blurb}</p>
          <br/>
          {btnEdit} {btnDelete} {btnEditRewards}
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
          <p>details:{this.state.Project.project.details}</p>
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
