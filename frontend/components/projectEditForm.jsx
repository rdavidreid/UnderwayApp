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

  getStateFromStore: function() {
    return({Project: ProjectStore.findById(
      parseInt(this.props.params.id)
    )});
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchSingleProject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    return (this.getStateFromStore());
  },

  postImage: function (image) {
    this.setState({img_url: image.url});
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

  editProject: function(event) {
    event.preventDefault();
    var project = {};

    //TODO EDIT THIS

    Object.keys(this.state).forEach(function(key){
      project[key] = this.state[key];
    }.bind(this));
    var valid = this.validateInput();
    if (valid) {
      ApiUtil.updateProject(project, function(id) {
        this.history.pushState(null, "/project/" + id, {});
      }.bind(this));
    } else {
      alert(this.errors.join("\n"));
    }
  },


  render: function() {
    if(this.state.Project == undefined){
      return(<div>loading...</div>);
    }

    return(
      <div className="create-form col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
        <form className="form-horizontal editProjectForm" onSubmit={this.editProject}>
          <h2>Editing: {this.state.Project.project.title}</h2>

          <div className="form-group ">
            <label htmlFor='project_blurb' className="col-sm-2 control-label">Edit Blurb:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                id="project_blurb"
                valueLink={this.linkState("blurb")}
                defaultValue={this.state.Project.project.blurb}
                required
              />
            </div>
          </div>

          <div className="form-group ">
            <label htmlFor='project_detals' className="col-sm-2 control-label">Edit Details:</label>
              <div className="col-sm-10">
              <textarea
                className="form-control"
                id="details"
                valueLink={this.linkState("details")}
                defaultValue={this.state.Project.project.details}
                >
              </textarea>
            </div>
          </div>

          <div className="form-group ">
            <label htmlFor='img_url' className="col-sm-2 control-label">Image URL:</label>
              <div className="col-sm-10">

              <input
                className="form-control"
                type="text"
                id="img_url"
                valueLink={this.linkState("img_url")}
                defaultValue={this.state.Project.project.img_url}
                required
              />
            </div>
          </div>

          <Cloud postImage={this.postImage} />

          <div className="form-group">
            <div className="col-sm-10">
              <br />
              <button className="button blue">Confirm Changes</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = projectForm;
