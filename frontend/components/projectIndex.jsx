var React = require('react');
var ReactDOM = require('react-dom');
var ProjectStore = require('../stores/ProjectStore');
var ApiUtil = require('../util/api_util');
var ProjectIndexItem = require('./ProjectIndexItem');

var ProjectIndex = React.createClass({
  getInitialState: function() {
    return({Projects: ProjectStore.all()});
  },

  _onChange: function() {
    this.setState({Projects: ProjectStore.all()});
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchAllProjects();
  },

  componentWillUnmount: function(){
    this.projectListener.remove();
  },

  render: function() {
    var arrProjects = this.state.Projects.map(function(el) {
      return(<ProjectIndexItem project={el} key={el.id}/>);
    });

    return(
      <ul id='indexItemContainer'>{arrProjects}</ul>

    );
  }

});

module.exports = ProjectIndex;
