var React = require('react');
var ReactQuill = require('react-quill');

var Quill = React.createClass({
  render: function() {
    return(
      <ReactQuill value={this.state.value} />
    );
  }

});

module.exports = Quill;
