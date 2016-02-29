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
    debugger;
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

      // var rewards = this.state.User.rewards.map(function(el) {
      //   return(<RewardDetail reward={el} clickerFunc="none" />);
      // });



    var rewardRow = this.state.User.rewards.map(function(el) {
      return(
          <UserRewardTableRows reward={el}/>
        );
      });

    } else {
      backedProjects = [];
      createdProjects = [];
      rewards = [];
    }

    return (
      <div>
        <div className="row">
          <div id="backedProjects" className="col-md-12">
            <h2>Backed Projects</h2>
            {backedProjects}
          </div>
        </div>
        <div className="row">
          <div id="createdProjects" className="col-md-12">
            <h2> Created Projects</h2>
            {createdProjects}
          </div>
        </div>

        <div className="row">
          <div id="rewards">
            <h2>Purchase History</h2>
              {rewards}
          </div>
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
