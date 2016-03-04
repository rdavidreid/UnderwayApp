var React = require('react');
var History = require('react-router').History;

var Profile = React.createClass({
  mixins: [History],
  _clickProfile: function() {
    this.history.push("/userDetails");
  },
  render: function() {
    return(
      <span className=".navbar-link" onClick={this._clickProfile}>
        Profile
      </span>
    );
  }
});

module.exports = Profile;
