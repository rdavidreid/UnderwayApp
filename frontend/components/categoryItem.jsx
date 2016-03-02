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
    return(
        <div
          className="col-sm-3 category-item"
          id={this.props.category.title}
          onClick={this._onClick}>
          {this.props.category.title}
        </div>
    );
  }

});

module.exports = Category;
