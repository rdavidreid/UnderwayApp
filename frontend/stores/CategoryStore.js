var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CategoryConstants = require('../constants/CategoryConstants');

var _categories = [];
var CategoryStore = new Store(AppDispatcher);

CategoryStore.all = function() {
  return _categories.slice(0);
};

CategoryStore.resetCategories = function(newCategories) {
  _categories = newCategories;
};

CategoryStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CategoryConstants.ALL_CATEGORIES_RECIEVED:
      this.resetCategories(payload.categories);
      this.__emitChange();
      break;
  }
};

module.exports = CategoryStore;
