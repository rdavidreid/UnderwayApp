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

  render: function() {

    if (this.state.Project === undefined ||
    this.state.Project.project === undefined){
      return(<p>Loading...</p>);
    } else {

      var btnDelete = (<button
        className="button blue glossy"
        onClick={this.deleteProject}>Delete</button>);
      var btnEdit =   (<button
        className="button blue glossy"
        onClick={this.editProject}>Edit</button>);
      var btnEditRewards = (<button
        className="button blue glossy"
        onClick={this.editRewards}>Add Rewards</button>);
    }

    var rewards = "";
    if (this.state.Project.project.rewards === undefined){
    } else {
      rewards = [];
      rewards = this.state.Project.project.rewards.map(function(el) {
        return(<RewardDetail reward={el} />);
      });
    }

    return(
    <div>
      <div className="row details-top">

        <div id="ProjectDetailPane" className="col-md-6">

          <h3>TITLE: {this.state.Project.project.title}</h3>
          <img
            className="project-detail-image"
            src={this.state.Project.project.img_url}>
          </img>
          <p>Blurb:{this.state.Project.project.blurb}</p>
          <br/>
          {btnEdit} {btnDelete} {btnEditRewards}
          <br/>
          <br/>
        </div>

        <div className="col-md-6">

          <h4>Funding Goal:</h4>
          <p>{this.state.Project.project.funding_goal}</p>
          <h4>Funding Raised:</h4>
          <p>{this.state.Project.project.current_funding}</p>
          <h4>Campaign end date:</h4>
          <p>{this.state.Project.project.campaign_end_date}</p>

        </div>

      </div>

      <div className="row row details-bottom">

        <div className="col-md-8">
          <p>details:{this.state.Project.project.details}</p>
        </div>

        <div className="col-md-4">
          <br></br>
          {rewards}
        </div>

      </div>
    </div>
    );
  }
});

module.exports = ProjectDetail;
