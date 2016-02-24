var Dispatcher = require("../dispatcher/dispatcher");
var ProjectConstants= require("../constants/ProjectConstants");

var ApiActions = {
  recieveAll: function(obj){
    Dispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECIEVED,
      projects: obj
    });
  },
  recieveSingle: function(obj) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECIEVED,
      projects: obj
    });
  },

};


module.exports = ApiActions;
