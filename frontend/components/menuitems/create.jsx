var React = require('react');
var History = require('react-router').History;

var Create = React.createClass({
  mixins: [History],
  _clickCreate: function() {
    this.history.push("/createProject");
  },
  render: function() {
    return(
      <span className=".navbar-link" onClick={this._clickCreate}>
        Create
      </span>
    );
  }
});

module.exports = Create;
