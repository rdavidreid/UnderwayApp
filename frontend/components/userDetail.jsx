var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var UserStore = require('../stores/UserStore');
var ApiUtil = require('../util/api_util');
var RewardDetail = require('./RewardDetail');
var ProjectIndexItem = require('./ProjectIndexItem');
var UserRewardTableRows = require('./userRewardTableRow');

var History = require('react-router').History;

var ProjectDetail = React.createClass({
  mixins: [History],

  getStateFromStore: function() {
    return({User: UserStore.currentUser()});
},

  getInitialState: function() {
    return this.getStateFromStore();
  },

  _onChange: function() {
    this.setState({User: UserStore.currentUser()});
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  editRewards: function() {
    this.history.push('/editreward/' + this.state.Project.project.id);
  },

  _clickRewardRow: function() {
    this.history.push('/project/' + arguments[0]);
  },

  render: function() {
    var that = this;

    if (this.state.User != undefined){

      var backedProjects = this.state.User.backed_projects.map(function(el) {
        return(<ProjectIndexItem project={el} key={el.id}/>);
      });

      var createdProjects = this.state.User.authored_projects.map(function(el) {
        return(<ProjectIndexItem project={el} key={el.id}/>);
      });

      var rewardRow = this.state.User.rewards.map(function(el) {
        return(<UserRewardTableRows reward={el}/>);
      });

    }
    else {

      backedProjects = [];
      createdProjects = [];
      rewardRow = [];
    }

    if(backedProjects == ""){
      backedProjects = (
        <div className="alert alert-warning" role="alert">
          You have not backed any projects
        </div>
      );
    }

    if(createdProjects == ""){
      var createdProjects = (<div className="alert alert-warning" role="alert">
        You have not created any projects
      </div>);
    }
    return (
      <div>

        <div className="row">
          <h2 className="user-detail-title">Backed Projects</h2>
          {backedProjects}
        </div>

        <div className="row">
          <h2 className="user-detail-title"> Created Projects</h2>
          {createdProjects}
        </div>


        <table className="table table-hover">
          <h2>Purchase History</h2>
          <thead>
            <tr>
              <th>Reward:</th>
              <th>Price:</th>
              <th>delivery_date:</th>
              <th>description:</th>
            </tr>
          </thead>
          <tbody>
            {rewardRow}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = ProjectDetail;
