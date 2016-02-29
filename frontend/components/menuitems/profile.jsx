var React = require('react');
var History = require('react-router').History;

var Profile = React.createClass({
  mixins: [History],
  _clickCreate: function() {
    this.history.push("/userDetails");
  },
  render: function() {
    return(
      <span className=".navbar-link" onClick={this._clickCreate}>
        Profile
      </span>
    );
  }
});

module.exports = Profile;
