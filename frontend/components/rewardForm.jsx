var React = require('react');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ProjectStore = require('../stores/ProjectStore');
var RewardDetail = require('./rewardDetail');

var rewardForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  inputs: {
    title: "",
    description: "",
    cost: "",
    project_id: "",
    delivery_date: "",
    reward_max_count: ""
  },

  getStateFromStore: function() {
    return({Project: ProjectStore.findById(
      parseInt(this.props.params.id)
    )});
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    this.state = {};
    this.state.inputs = this.inputs;
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

  // TODO: REFACTOR / CLEAN THIS. add into another file

  validateInput: function() {
    // this.errors = [];
    // if(this.state.title === "" || this.state.title === " ") {
    //   this.errors.push("Title can not be blank");
    // }
    // if(this.state.blurb ==="" || this.state.title === " ") {
    //   this.errors.push("blurb cannot be blank");
    // }
    // if(this.state.campaign_end_date === "" || this.state.title === " ") {
    //   this.errors.push("date cannot be blank");
    // }
    // if(this.state.details === "" || this.state.title === " ") {
    //   this.errors.push("details cannot be blank");
    // }
    // if(this.state.category_id ==="" || this.state.title === " ") {
    //   this.errors.push("you must select a category!");
    // }
    // if(this.state.funding_goal === "" || this.state.title === " ") {
    //   this.errors.push("You must have a funding goal");
    // }
    // if (this.errors.length > 0) {
    //   return false;
    // }
    return true;
  },

  createReward: function(event) {

    event.preventDefault();
    this.state.project_id = this.props.params.id;
    var project = {};

    //TODO EDIT THIS

    Object.keys(this.state).forEach(function(key){
      project[key] = this.state.key;
    }.bind(this));

    var valid = this.validateInput();
    if (valid) {
      ApiUtil.createReward(this.state, function(id) {});
      this.setState({
        title: "",
        description: "",
        cost: "",
        project_id: "",
        delivery_date: "",
        img_url: "",
        reward_max_count: "",
      });
    } else{
      alert(this.errors.join("\n"));
    }
  },

  backToProject: function() {
    this.history.push('/project/' + this.state.Project.project.id);
  },

  render: function() {
    var msg = "";
    var rewards = "";

    if(this.state.Project !== undefined && this.state.Project.project !== undefined){
      rewards = [];
      rewards = this.state.Project.project.rewards.map(function(el) {
        // rewards.push(el.reward_title);
        return(<RewardDetail reward={el} clickerFunc="none" />);
      });
    }

    if(this.props.location.query.new === "true"){
      msg = <div className="alert alert-info">Dont forget to add rewards to your project! Projects that have
        rewards get *significantly* more funding than those which dont.</div>;
      } else {
        msg = <div className="alert alert-info">Add more rewards! Achieve your dreams!</div>;
      }
    return(
      <div className="row create-form">
      <div className="col-sm-12 col-md-8">
      <form className="form-horizontal createRewardForm" onSubmit={this.createReward}>

        <h2 className="create-form-title">REWARD FORM</h2>
        {msg}

        <div className="form-group ">
          <label htmlFor='title' className="col-sm-2 control-label">Title:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              valueLink={this.linkState("title")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='description' className="col-sm-2 control-label">description:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="description"
              valueLink={this.linkState("description")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='cost' className="col-sm-2 control-label">Cost:
          </label>
          <div className="col-sm-10">
            <input
              type="integer"
              className="form-control"
              id="cost"
              valueLink={this.linkState("cost")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='delivery_date' className="col-sm-2 control-label" >Delivery Date:
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="date"
              id="delivery_date"
              valueLink={this.linkState("delivery_date")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='reward_max_count' className="col-sm-2 control-label">Quantity (optional):
          </label>
            <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="reward_max_count"
              valueLink={this.linkState("reward_max_count")}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-10">
            <button className="button blue">Create Reward</button>
          </div>
        </div>

      </form>
      <button className="button blue" onClick={this.backToProject}>Back to Project</button>
    </div>
    <div className="col-sm-12 col-md-4">
      <h2 className="create-form-title">Existing Rewards</h2>
      {rewards}
    </div>
    </div>

    );
  }
});

// <div className="form-group">
//   <label htmlFor='img_url' className="col-sm-2 control-label">Image URL (optional):
//   </label>
//     <div className="col-sm-10">
//     <input
//       className="form-control"
//       type="text"
//       id="img_url"
//       valueLink={this.linkState("img_url")}
//     />
//   </div>
// </div>


module.exports = rewardForm;
