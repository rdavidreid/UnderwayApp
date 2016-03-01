var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/UserConstants');

var _user = [];

var UserStore = new Store(AppDispatcher);

UserStore.resetUsers = function(newUser) {
  _user = [newUser];
  return _user;
};

UserStore.currentUser = function() {
  return _user[0];
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.CURRENT_USER_RECIEVED:
    console.log("user aquired", payload.user.username);
      this.resetUsers(payload.user);
      this.__emitChange();
  }
};

module.exports = UserStore;
