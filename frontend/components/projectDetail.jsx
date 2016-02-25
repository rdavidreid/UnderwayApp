var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;



var ProjectDetail = React.createClass({
  mixins: [History],

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

  deleteProject: function() {
    ApiUtil.destroyProject(this.state.Project);
    this.history.push('/');
  },

  editProject: function() {
    this.history.push('/editproject/' + this.state.Project.project.id);
  },

  render: function() {
    if (this.state.Project === undefined ||
    this.state.Project.project === undefined){
      return(<p>Loading...</p>);
    } else {
      var btnDelete = (<button onClick={this.deleteProject}>Delete</button>);
      var btnEdit =   (<button onClick={this.editProject}>Edit</button>);
    }
    return(
      <div id="ProjectDetailPane">
        <h3>TITLE: {this.state.Project.project.title}</h3>
        <p>Blurb:{this.state.Project.project.blurb}</p>
        <p>details:{this.state.Project.project.details}</p>
        IDIS: {this.props.params.id} WOO
        <br/>
        {btnEdit} {btnDelete}
      </div>
    );
  }
});

module.exports = ProjectDetail;
