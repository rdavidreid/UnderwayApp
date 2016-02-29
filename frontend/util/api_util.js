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
  },

  signOut: function() {
    $.ajax({
      url: "/session",
      type: "DELETE",
      // data: currentProject,
      // data: bounds,
      success: function() {
        window.location.reload();
      },
    });
  },

  createReward: function(newReward, func) {
    $.ajax({
      url: "/api/rewards",
      type: "POST",
      data: {reward: newReward},
      // data: bounds,
      success: function(data) {
        ApiActions.recieveSingle(data);
      },
      error: function(data) {
      }
    });
  },

  createBacker: function(newBacker) {
    $.ajax({
      url: "/api/backers",
      type: "POST",
      data: {backer: newBacker},
      success: function(data) {
        ApiActions.recieveSingle(data);
      }
    });
  },

  fetchCurrentUser: function() {
    $.ajax({
      url: "/api/session",
      type: "GET",
      success: function(data) {
        ApiActions.recieveUser(data);
      }
    });
  }

};

module.exports = ApiUtil;
