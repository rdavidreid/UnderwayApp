var React = require('react');
var ReactDOM = require('react-dom');
var ProjectStore = require('../stores/ProjectStore');
var ApiUtil = require('../util/api_util');
var ProjectIndexItem = require('./ProjectIndexItem');
var CategoryStore = require('../stores/CategoryStore');

var ProjectIndex = React.createClass({

  getInitialState: function() {
    if(this.props.location.query.category){
      return({
        Projects: ProjectStore.select(this.props.location.query.category),
        Category: CategoryStore.idCategory(this.props.location.query.category)
      });
    }
    else {
      return({
        Projects: ProjectStore.all(),
        Category: "All"
      });
    }
  },

  _onChange: function() {
    if(this.props.location.query.category){
      this.setState({
        Projects: ProjectStore.select(this.props.location.query.category),
        Category: CategoryStore.idCategory(this.props.location.query.category)
      });
    }
    else {
      this.setState({
        Projects: ProjectStore.all(),
        Category: "All"
      });
    }
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
      <div>
        <div className="row">
          <h2 className="project-index-category">You are exploring: {this.state.Category}</h2>
        </div>
        <div className="row">
          {arrProjects}
        </div>
      </div>

    );
  }

});

module.exports = ProjectIndex;
