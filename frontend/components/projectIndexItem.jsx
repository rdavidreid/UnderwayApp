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
      <div className="index-item col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={this.showDetails}
        key={parseInt(this.props.project.id)} >
        <div className="inner-box">
          <div className="thumbnail">
            <h3 className="project-index-item-title">{this.props.project.title}
            </h3>
            <br />
            <br />
            <img src="http://lorempixel.com/400/400/cats"></img>
            <p>Blurb: {this.props.project.blurb}</p>
          </div>
        </div>
      </div>
    );
  }


});

module.exports = ProjectIndexItem;
//
// <div class="row">
//   <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="..." alt="...">
//       <div class="caption">
//         <h3>Thumbnail label</h3>
//         <p>...</p>
//         <p>
//           <a href="#" class="btn btn-primary" role="button">Button</a>
//           <a href="#" class="btn btn-default" role="button">Button</a>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
