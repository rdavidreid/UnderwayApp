var React = require('react');
var History = require('react-router').History;

var SignOut = React.createClass({
  mixins: [History],
  _clickSignOut: function() {
    this.history.push("/createProject");
  },
  render: function() {
    return(
      <span className=".navbar-link" onClick={this._clickSignOut}>
        SignOut
      </span>
    );
  }
});

module.exports = SignOut;
