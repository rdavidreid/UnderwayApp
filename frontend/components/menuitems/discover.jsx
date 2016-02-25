var React = require('react');
var History = require('react-router').History;

var Discover = React.createClass({
  mixins: [History],
  _clickDiscover: function() {
    this.history.push("/");
  },
  render: function() {
    return(
      <span className=".navbar-link" onClick={this._clickDiscover}>
        Discover
      </span>
    );
  }
});

module.exports = Discover;
