var React = require('react');
var History = require('react-router').History;

var Create = React.createClass({
  mixins: [History],
  _clickCreate: function() {
    this.history.push("/createProject");
  },
  render: function() {
    return(

      <a className=".navbar-link navbar-create" onClick={this._clickCreate}>
        Create
      </a>
      
    );
  }
});

module.exports = Create;
