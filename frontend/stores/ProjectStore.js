var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/ProjectConstants');

var _projects = [];
var ProjectStore = new Store(AppDispatcher);

ProjectStore.all = function() {
  return _projects.slice(0);
};

ProjectStore.resetProjects = function(projects) {
  _projects = projects;
};

ProjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ProjectConstants.PROJECTS_RECIEVED:
      this.resetProjects(payload.projects);
      this.__emitChange();
      console.log('from the store');
      console.log(_projects);
      break;
  }
};

module.exports = ProjectStore;
