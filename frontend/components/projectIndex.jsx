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
      <div className="row">
        {arrProjects}
      </div>

    );
  }

});

module.exports = ProjectIndex;


// <div class="row">
//   <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="..." alt="...">
//       <div class="caption">
//         <h3>Thumbnail label</h3>
//         <p>...</p>
//         <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//       </div>
//     </div>
//   </div>
// </div>
