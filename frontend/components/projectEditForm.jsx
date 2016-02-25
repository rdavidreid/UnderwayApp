var React = require('react');
var ApiUtil = require('../util/api_util.js');
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
    console.log(this.props.params.id);
    console.log("EDIT FORM!!");
    return (this.getStateFromStore());
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
      console.log(this.state.key);
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
      <div>
        <form className="new-project" onSubmit={this.editProject}>
          <h2>{this.state.Project.title}</h2>

          <div>
            <label htmlFor='project_blurb'>Blurb:
              <br />
              <input
                type="text"
                id="project_blurb"
                valueLink={this.linkState("blurb")}
                defaultValue={this.state.Project.project.blurb}
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor='details'>Details:
              <br />
              <textarea
                id="details"
                valueLink={this.linkState("details")}
                defaultValue={this.state.Project.project.details}
                >
              </textarea>
            </label>
          </div>

          <div>
            <label htmlFor='img_url'>Image:
              <br />
              <input
                type="text"
                id="img_url"
                valueLink={this.linkState("img_url")}
                defaultValue={this.state.Project.project.img_url}
                required
              />
            </label>
          </div>

          <button>Edit Project</button>

        </form>
      </div>
    );
  }
});

module.exports = projectForm;
