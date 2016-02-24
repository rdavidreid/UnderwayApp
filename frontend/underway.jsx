var React = require('react');
var ReactDOM = require('react-dom');
var ProjectStore = require('./stores/ProjectStore');
var ApiUtil = require('./util/api_util');
var ProjectIndex = require("./components/projectIndex");
var ProjectDetail = require('./components/projectDetail');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({

  render: function() {
    return(
      <div id="app">
        <ProjectIndex />
      </div>
    );
  }

  // <ProjectDetail />
  // {this.props.children}
});

var routes = (
  <Router>
    <Route path="/" component={App} ></Route>
    <Route path="project/:id" component={ProjectDetail} ></Route>
  </Router>

    // <Route path="project/:id" component={ProjectDetail}>
    // </Route>
);

// TODO REMOVE:
window.ApiUtil = ApiUtil;

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
