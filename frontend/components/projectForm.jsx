var React = require('react');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

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
    return this.inputs;
  },

  // TODO: REFACTOR / CLEAN THIS. must be a better way

  validateInput: function() {
    this.errors = [];
    if(this.state.title === "") {this.errors.push("Title can not be blank");}
    if(this.state.blurb ==="") {this.errors.push("blurb cannot be blank"); }
    if(this.state.campaign_end_date === ""){
      this.errors.push("date cannot be blank");
    }
    if(this.state.details === "") {this.errors.push("details cannot be blank");}
    if(this.state.category_id ==="") {
      this.errors.push("you must select a category!");
    }
    if(this.state.funding_goal === ""){
      this.errors.push("You must have a funding goal");
    }
    if (this.errors.length > 0){
      return false;
    }
    return true;
  },

  createProject: function(event) {
    event.preventDefault();
    var project = {};

    Object.keys(this.state).forEach(function(key){
      project[key] = this.state.key;
    }.bind(this));

    var valid = this.validateInput();
    debugger;
    if (valid) {
      ApiUtil.createProject(this.state, function(id) {
        this.history.pushState(null, "/project/" + id, {});
      }.bind(this));
    } else{
      alert(this.errors.join("\n"));
    }
  },


  render: function() {

    // if (this.errors !== undefined && this.errors.length > 0){
    //   var errorArr = this.errors.map(function(error) {
    //     return(<li id="error-item"></li>);
    //   });
    // }else{
    //   this.errorArr = "";
    // }
    // <ul id="error-list">{errorArr}</ul>

    return(
      <form className="new-project" onSubmit={this.createProject}>
        <div>
          <label htmlFor='project_title'>Title:
            <input
              type="text"
              id="project_title"
              valueLink={this.linkState("title")}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor='project_blurb'>Blurb:
            <input
              type="text"
              id="project_blurb"
              valueLink={this.linkState("blurb")}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor='project_end_date'>End date:
            <input
              type="date"
              id="project_end_date"
              valueLink={this.linkState("campaign_end_date")}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor='details'>Details:
            <textarea id="details" valueLink={this.linkState("details")}>
            </textarea>
          </label>
        </div>

        <div>
          <label htmlFor='category'>Category:
            <select id="category" valueLink={this.linkState("category_id")}>
              <option value=" ">select:</option>
              <option value={1}>Category 1</option>
              <option value={2}>Category 2</option>
              <option value={3}>Category 3</option>
              <option value={4}>Category 4</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor='funding_goal'>Funding Goal:
            <input
              type="text"
              id="funding_goal"
              valueLink={this.linkState("funding_goal")}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor='img_url'>Image:
            <input
              type="text"
              id="img_url"
              valueLink={this.linkState("img_url")}
              required
            />
          </label>
        </div>

        <button>Create Project</button>

      </form>
    );
  }
});

module.exports = projectForm;
