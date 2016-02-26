var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var SignOut = React.createClass({
  mixins: [History],

  _clickSignOut: function() {
    ApiUtil.signOut();
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
