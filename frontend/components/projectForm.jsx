var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var projectForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  render: function() {

    return(
      <form>

      </form>
    );
  }
});

module.exports = projectForm;
