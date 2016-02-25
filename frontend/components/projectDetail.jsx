var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var ApiUtil = require('../util/api_util');


var ProjectDetail = React.createClass({

  getStateFromStore: function() {
    return({Project: ProjectStore.findById(
      parseInt(this.props.params.id)
    )});
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSingleProject(parseInt(this.props.params.id));
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchSingleProject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  render: function() {
    if (this.state.Project === undefined ||
    this.state.Project.project === undefined){
      return(<p>Loading...</p>);
    }
    return(
      <div id="ProjectDetailPane">
        <h3>TITLE: {this.state.Project.project.title}</h3>
        <p>Blurb:{this.state.Project.project.blurb}</p>
        <p>details:{this.state.Project.project.details}</p>
        IDIS: {this.props.params.id} WOO
      </div>
    );
  }
});

module.exports = ProjectDetail;
