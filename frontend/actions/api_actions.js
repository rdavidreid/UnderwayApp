var Dispatcher = require("../dispatcher/dispatcher");
var ProjectConstants= require("../constants/ProjectConstants");
var UserConstants = require('../constants/UserConstants');

var ApiActions = {
  recieveAll: function(obj){
    Dispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECIEVED,
      projects: obj
    });
  },
  recieveSingle: function(obj) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.SINGLE_PROJECT_RECIEVED,
      projects: obj
    });
  },

  createdReward: function(obj) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.SINGLE_PROJECT_RECIEVED,
      projects: obj
    });
  },

  recieveUser: function(obj) {
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECIEVED,
      user: obj
    });
  },

};


module.exports = ApiActions;
