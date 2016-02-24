var React = require('react');
var History = require('react-router').History;

var ProjectIndexItem = React.createClass({
  mixins: [History],

  showDetails: function() {
    console.log("test");
    this.history.push('/project/' + this.props.project.id);
    console.log("you have clicked item number", this.props.project.id);
  },

  render: function() {
    return(
      <li id='listIndexItem'
        onClick={this.showDetails}
        key={parseInt(this.props.project.id)} >
        <p>Title: {this.props.project.title}</p>
        <p>Blurb: {this.props.project.blurb}</p>
      </li>
    );
  }


});

module.exports = ProjectIndexItem;
