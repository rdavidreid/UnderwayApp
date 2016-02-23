var React = require('react');
var ReactDOM = require('react-dom');


var Fun = React.createClass({
  render: function() {
    return(
      <div>Hello flux!</div>
    );
  }

});



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Fun />, document.getElementById('content'));
});
