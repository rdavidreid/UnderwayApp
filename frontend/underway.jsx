var React = require('react');
var ReactDOM = require('react-dom');
var ProjectStore = require('./stores/ProjectStore');
var ApiUtil = require('./util/api_util');



var Fun = React.createClass({
  render: function() {
    return(
      <div>Hello flux!</div>
    );
  }

});

window.ApiUtil = ApiUtil;

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Fun />, document.getElementById('content'));
});
