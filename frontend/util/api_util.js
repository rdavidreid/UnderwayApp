var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchAllProjects: function() {
    $.ajax({
      url: "/api/projects",
      // data: bounds,
      success: function(data) {
        ApiActions.recieveAll(data);
      },
    });
  },

  fetchSingleProject: function(id) {
    $.ajax({
      url: "/api/projects/" + id,
      // data: bounds,
      success: function(data) {
        ApiActions.recieveSingle(data);
      },
    });
  },

  createProject: function(newProject, func) {
    // var newProject = {};
    // newProject['project']['title'] = "peanuts";

    $.ajax({
      url: "/api/projects",
      type: "POST",
      data: {project: newProject},
      // data: bounds,
      success: function(data) {
        ApiActions.recieveSingle(data);
        func && func(data.project.id);
      },
      error: function(data) {
      }
    });
  },
// "/api/projects/"
  updateProject: function(currentProject, func) {
    $.ajax({
      url: "/api/projects/" + currentProject['Project']['project']['id'],
      type: "PATCH",
      data: {project: currentProject},
      // data: (currentProject),
      // data: bounds,
      success: function(data) {
        ApiActions.recieveSingle(data);
        func && func(data.project.id);
      },
    });
  },

  destroyProject: function(currentProject) {
    var that = this;
    $.ajax({
      url: "/api/projects/" + currentProject['project']['id'],
      type: "DELETE",
      data: currentProject,
      // data: bounds,
      success: function(newData) {
        // that.fetchAllProjects()
        ApiActions.recieveAll(newData);
      },
    });
  }
  // fetchSingleProject: function() {
  //
  // }
};



 // TODO: REMOVE THIS -- hardcoded to create a project with API

 // ApiUtil.createProject({project: {title: "testtitle", blurb: "The blurb of project 1",
 // img_url: "http://lorempixel.com/200/200/cats/",
 // details: "These are the details of project one. This could contain",
 // author_id: 1,
 // category_id: 1,
 // current_funding: 0,
 // funding_goal: 100000, campaign_end_date: new Date() }})

 // ApiUtil.updateProject({project: {id: 2, title: "THIS IS AN EDITED TITLE WOOT",
 // blurb: "EDITED BLURB TOO WOOOOOT",
 // img_url: "http://lorempixel.com/200/200/cats/",
 // details: "These are the EDITED DETAILS OF THE PROJECT WOOOOOT",
 // author_id: 1,
 // category_id: 1,
 // current_funding: 0,
 // funding_goal: 100000,
 // campaign_end_date: new Date() }})

 // ApiUtil.destroyProject({project: {id: 2}})

module.exports = ApiUtil;
