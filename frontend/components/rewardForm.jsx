var React = require('react');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ProjectStore = require('../stores/ProjectStore');
var RewardDetail = require('./rewardDetail');
var DateTime = require('react-datetime');
var Modal = require('react-modal');

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

  getNewState: function() {
    return({
      title: "",
      description: "",
      cost: "",
      project_id: "",
      delivery_date: "",
      reward_max_count: "",
      modalIsOpen: false,
      Project: ProjectStore.findById(parseInt(this.props.params.id)),
      customStyles: {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          borderRadius          : '10px',
          border                : '1px solid black',
          backgroundColor       : "#ffff00"
        },
        overlay : {
          position               : 'fixed',
          top                    : 0,
          left                   : 0,
          right                  : 0,
          bottom                 : 0,
          backgroundColor        : 'rgba(0, 0, 0, 0.5)'
        }
      },
    });
  },

  _onChange: function() {
    this.setState(this.getNewState());
  },

  onDateChange: function(value) {
    this.state.delivery_date = new Date(value.valueOf());
  },

  getInitialState: function() {
    return this.getNewState();
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

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  // TODO: REFACTOR / CLEAN THIS. add into another file

  validateInput: function() {
    this.errors = [];
    if(this.state.title ==="") {
      this.errors.push("Title can not be blank");
    }
    if(this.state.description ==="") {
      this.errors.push("description cannot be blank");
    }
    if(this.state.cost === "" || Number(this.state.cost) != this.state.cost) {
      this.errors.push("invalid cost");
    }
    if(this.state.cost <= 0) {
      this.errors.push("Cost must be above 0");
    }
    if(typeof parseInt(this.state.cost) !=='number' ||
              (parseInt(this.state.cost) % 1) !== 0){
      this.errors.push("Cost must be a number");
    }
    if(this.state.reward_max_count != "") {
      if(typeof parseInt(this.state.reward_max_count) !=='number' ||
      (parseInt(this.state.reward_max_count) % 1) !== 0){
        this.errors.push("Quantity must be a number");
      }
      if(this.state.reward_max_count <= 0) {
        this.errors.push("Quantity cannot be negative");
      }
    }
    if(this.state.delivery_date === undefined) {
      this.errors.push("Must sellect delivery date");
    }
    if (this.errors.length > 0) {
      return false;
    }
    return true;
  },

  createReward: function(event) {

    event.preventDefault();
    this.state.project_id = this.props.params.id;
    var reward = {};

    //TODO EDIT THIS

    Object.keys(this.inputs).forEach(function(key){
      reward[key] = this.state[key];
    }.bind(this));

    var valid = this.validateInput();
    if (valid) {
      ApiUtil.createReward(reward, function(id) {});
      this.setState({
        title: "",
        description: "",
        cost: "",
        project_id: "",
        // delivery_date: "",
        img_url: "",
        reward_max_count: "",
      });
    } else{
      this.errorList = this.errors.map(function(el) {
        return (<li>{el}</li>);
      });
      this.openModal();
    }
  },

  backToProject: function() {
    this.history.push('/project/' + this.state.Project.project.id);
  },

  render: function() {
    Modal.setAppElement(document.body);
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
            <DateTime
              isValidDate={this.validDate}
              input={false}
              onChange={this.onDateChange}
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
          <h6 className="quantity-explanation">
            Want to limit how many of these rewards are available? Just enter a
            number above!
          </h6>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-10">
            <button className="button blue" onClick={this.backToProject}>Back to Project</button>
            <button className="button blue push-left">Create Reward</button>
          </div>
        </div>

      </form>
    </div>
    <div className="col-sm-12 col-md-4">
      <h2 className="create-form-title">Existing Rewards</h2>
      {rewards}
    </div>
    <Modal
      className="reward-modal"
      isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal}
      style={this.state.customStyles} >
      <h2 className="reward-modal-title">Errors:</h2>
      <div className="reward-modal-msg">{this.errorList}</div>
    </Modal>
    </div>

    );
  }
});

module.exports = rewardForm;
