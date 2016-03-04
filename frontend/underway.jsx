var React = require('react');
var ReactDOM = require('react-dom');
var ProjectStore = require('./stores/ProjectStore');
var UserStore = require('./stores/UserStore');
var CategoryStore = require('./stores/CategoryStore');
var ApiUtil = require('./util/api_util');
var ProjectIndex = require("./components/projectIndex");
var ProjectDetail = require('./components/projectDetail');
var ProjectForm = require('./components/projectForm.jsx');
var ProjectEditForm = require('./components/ProjectEditForm');
var UserDetail = require('./components/userDetail');
var RewardForm = require('./components/rewardForm');
var Discover = require('./components/Discover');
var Menu = require('./components/Menu');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({

  render: function() {
    return(
      <div id="app">
        <Menu />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Discover}></IndexRoute>
    <route path="projects" component={ProjectIndex}></route>
    <Route path="project/:id" component={ProjectDetail} ></Route>
    <Route path="createproject" component={ProjectForm}></Route>
    <Route path="editproject/:id" component={ProjectEditForm}></Route>
    <Route path="editreward/:id" component={RewardForm}></Route>
    <Route path="userdetails" component={UserDetail}></Route>
  </Route>
);



// var routes = (
//   <Router>
//
//     <Route path="/" component={ProjectIndex} ></Route>
//     <Route path="project/:id" component={ProjectDetail} ></Route>
//     <Route path="createproject" component={ProjectForm}></Route>
//     <Route path="editproject/:id" component={ProjectEditForm}></Route>
//
//   </Router>

// );

// TODO REMOVE:
window.ApiUtil = ApiUtil;
window.CategoryStore = CategoryStore;

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('content');
  if (root){
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
});
