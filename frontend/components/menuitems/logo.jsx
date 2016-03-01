var React = require('react');
var History = require('react-router').History;

var Logo = React.createClass({
  mixins: [History],
  _clickLogo: function() {
    this.history.push("/");
  },
  render: function() {
    return(
      <div id="logo-icon" onClick={this._clickLogo}>
        <img src="/assets/Underway-icon-color.png" id="icon"></img>
      </div>
    );
  }
});

module.exports = Logo;
