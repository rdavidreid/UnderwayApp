var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var Category = React.createClass({
  mixins: [History],

  _onClick: function() {
    if (this.props.category) {
      this.history.pushState(null, "/projects/", {category: this.props.category.id});
    }
    else {
      this.history.pushState(null, "/projects/");
    }
  },

  render: function() {
    if (this.props.count === 1) {
      var projects = ' Project';
    } else {
      projects = ' Projects';
    }
    return(
        <div className="col-sm-3 category-item" onClick={this._onClick}>
          <section className='slide-down' id={this.props.category.title}>

          <div className="wrapper">
            <div className="inner-item image1">
              {this.props.category.title}
            </div>

            <div className="inner-item inner-hover image2">
              {this.props.count} {projects}
            </div>

          </div>
          </section>

        </div>
    );
  }

});

module.exports = Category;
