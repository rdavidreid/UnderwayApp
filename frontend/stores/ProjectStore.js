var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectConstants = require('../constants/ProjectConstants');

var _projects = [];

var ProjectStore = new Store(AppDispatcher);

ProjectStore.all = function() {
  return _projects.slice(0);
};

ProjectStore.select = function(id) {
  var arr = [];
  _projects.forEach(function(el){
    if (el.category_id == id) {
      arr.push(el);
    }
  });
  return arr.slice(0);
};

ProjectStore.getCategoryCount = function(id) {
  var arr = this.select(id);
  return arr.length;
};

ProjectStore.singleProject = function() {
  return _projects[0];
};

ProjectStore.resetProjects = function(projects) {
  _projects = projects;
};

ProjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ProjectConstants.PROJECTS_RECIEVED:
      this.resetProjects(payload.projects);
      this.__emitChange();
      break;
    case ProjectConstants.SINGLE_PROJECT_RECIEVED:
      this.resetProjects([payload.projects]);
      this.__emitChange();
    case ProjectConstants.REWARD_CREATED:
    // TODO: NEED THIS?
      // this.__emitChange
  }
};

module.exports = ProjectStore;
