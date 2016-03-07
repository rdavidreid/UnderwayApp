var React = require('react');
var History = require('react-router').History;

var Discover = React.createClass({
  mixins: [History],
  _clickDiscover: function() {
    this.history.push("/");
  },
  render: function() {
    return(

      <a className=".navbar-link navbar-discover" onClick={this._clickDiscover}>
        Discover
      </a>

    );
  }
});

module.exports = Discover;
