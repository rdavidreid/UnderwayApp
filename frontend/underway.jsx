var React = require('react');
var ReactDOM = require('react-dom');
var ProjectStore = require('./stores/ProjectStore');
var ApiUtil = require('./util/api_util');
var ProjectIndex = require("./components/projectIndex");
var ProjectDetail = require('./components/projectDetail');
var ProjectForm = require('./components/projectForm');
var ProjectEditForm = require('./components/ProjectEditForm');
var Menu = require('./components/Menu');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({

  render: function() {
    return(
      <div id="app">
        <Menu />

        {this.props.children}
      </div>
    );
  }

});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectIndex}></IndexRoute>
    <Route path="project/:id" component={ProjectDetail} ></Route>
    <Route path="createproject" component={ProjectForm}></Route>
    <Route path="editproject/:id" component={ProjectEditForm}></Route>
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

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
