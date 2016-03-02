var React = require('react');
var ReactDom = require('react-dom');
var ApiUtil = require('../util/api_util');
var CategoryStore = require('../stores/CategoryStore');
var CategoryItem = require('./categoryItem');

var Discover = React.createClass({

  getInitialState: function() {
    return({categories: CategoryStore.all()});
  },

  _onChange: function() {
    this.setState({categories: CategoryStore.all()});
  },

  componentDidMount: function() {
    this.categoryListener = CategoryStore.addListener(this._onChange);
    ApiUtil.fetchAllCategories();
  },

  componentWillUnmount: function() {
    this.categoryListener.remove();
  },

  render: function() {
    var categories = this.state.categories.map(function(el) {
      return(<CategoryItem category={el} key={el.id} />);
    });
    var all = {title: "All"};
    categories.push(<CategoryItem category={all} key={99} />);

    return(
    <div>

      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="http://res.cloudinary.com/dur3lr9q4/image/upload/v1456883738/o284ebn1axjajhcxzg9z.jpg" alt="..."></img>
          <div className="carousel-caption">
            ...
          </div>
        </div>
        <div className="item">
          <img src="..." alt="..."></img>
          <div className="carousel-caption">
            ...
          </div>
        </div>
        ...
      </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



      <div className="category-selections">
        <div className="row">
          {categories}
        </div>
      </div>

    </div>

    );
  }


});

module.exports = Discover;
