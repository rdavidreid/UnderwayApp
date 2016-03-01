var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Cloud = require('./Cloud');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ProjectStore = require('../stores/ProjectStore');

var projectForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  inputs: {
    title: "",
    blurb: "",
    campaign_end_date: "",
    details: "",
    category_id: "",
    funding_goal: "",
    img_url: ""
  },

  getInitialState: function() {
    return(this.inputs);
  },

  // TODO: REFACTOR / CLEAN THIS. add into another file

  validateInput: function() {
    this.errors = [];
    if(this.state.title === "" || this.state.title === " ") {
      this.errors.push("Title can not be blank");
    }
    if(this.state.blurb ==="" || this.state.title === " ") {
      this.errors.push("blurb cannot be blank");
    }
    if(this.state.campaign_end_date === "" || this.state.title === " ") {
      this.errors.push("date cannot be blank");
    }
    if(this.state.details === "" || this.state.title === " ") {
      this.errors.push("details cannot be blank");
    }
    if(this.state.category_id ==="" || this.state.title === " ") {
      this.errors.push("you must select a category!");
    }
    if(this.state.funding_goal === "" || this.state.title === " ") {
      this.errors.push("You must have a funding goal");
    }
    if (this.errors.length > 0) {
      return false;
    }
    return true;
  },

  createProject: function(event) {
    event.preventDefault();
    var project = {};

    //TODO EDIT THIS

    Object.keys(this.state).forEach(function(key){
      project[key] = this.state.key;
      console.log(this.state.key);
    }.bind(this));

    var valid = this.validateInput();
    if (valid) {
      ApiUtil.createProject(this.state, function(id) {
        this.history.pushState(null, "/editreward/" + id, {new: true});
      }.bind(this));
    } else{
      alert(this.errors.join("\n"));
    }
  },

  postImage: function (image) {
    debugger;
    this.setState({img_url: image.url});
  },

  render: function() {

    return(
      <div className="create-form col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
      <form className="form-horizontal createProjectForm" onSubmit={this.createProject}>

        <h2 className="create-form-title">Create Project</h2>

        <div className="form-group ">
          <label htmlFor='project_title' className="col-sm-2 control-label">Title:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="project_title"
              valueLink={this.linkState("title")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='project_blurb' className="col-sm-2 control-label">Blurb:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="project_blurb"
              valueLink={this.linkState("blurb")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='project_end_date' className="col-sm-2 control-label">End date:
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="project_end_date"
              valueLink={this.linkState("campaign_end_date")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='details' className="col-sm-2 control-label">Details:</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="details" valueLink={this.linkState("details")}>
            </textarea>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='category' className="col-sm-2 control-label">Category:</label>
          <div className="col-sm-10">
            <select id="category" valueLink={this.linkState("category_id")}>
              <option value=" ">select:</option>
              <option value={1}>Category 1</option>
              <option value={2}>Category 2</option>
              <option value={3}>Category 3</option>
              <option value={4}>Category 4</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='funding_goal' className="col-sm-2 control-label" >Funding Goal:
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="funding_goal"
              valueLink={this.linkState("funding_goal")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='img_url' className="col-sm-2 control-label">Image:
          </label>
            <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="img_url"
              valueLink={this.linkState("img_url")}
              required
            />
          </div>

        </div>
        <Cloud postImage={this.postImage} />

        <div className="form-group">
          <div className="col-sm-10">
            <button className="button blue">Create Project</button>
          </div>
        </div>

      </form>
    </div>

    );
  }
});

module.exports = projectForm;
