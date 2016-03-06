var React = require('react');
var ReactDom = require('react-dom');
var ApiUtil = require('../util/api_util');
var CategoryStore = require('../stores/CategoryStore');
var ProjectStore = require('../stores/ProjectStore');
var CategoryItem = require('./categoryItem');
var ProjectIndexItem = require('./projectIndexItem');

var Discover = React.createClass({

  getInitialState: function() {
    return({categories: CategoryStore.all()});
  },

  _onCategoryChange: function() {
    this.setState({categories: CategoryStore.all()});
  },

  _onProjectChange: function() {
    this.setState({projects: ProjectStore.all()});
  },

  componentDidMount: function() {
    this.categoryListener = CategoryStore.addListener(this._onCategoryChange);
    this.projectListener = ProjectStore.addListener(this._onProjectChange);
    ApiUtil.fetchAllCategories();
    ApiUtil.fetchAllProjects();
  },

  componentWillUnmount: function() {
    this.categoryListener.remove();
    this.projectListener.remove();
  },

  compareByFunding: function(a,b){
    if (a.current_funding > b.current_funding){
      return -1;
    }
    if (b.current_funding > a.current_funding){
      return 1;
    }
    return 0;
  },

  selectMostFunding: function() {
    if(this.state.projects === undefined){
      return [];
    }
    var that = this;
    var arr = this.state.projects.sort(this.compareByFunding);
    var sortedArr = [];
    arr.forEach(function(el) {
      if (new Date(el.campaign_end_date) > new Date()){
        sortedArr.push(el);
      }
    });
    if (sortedArr.length >= 2) {
      return sortedArr.slice(0,4);
    }
    else {
      return [];
    }
  },


  render: function() {

    var mostFundedProjects = this.selectMostFunding();

    mostFundedProjects = mostFundedProjects.map(function(el) {
      return(<ProjectIndexItem project={el} key={el.id}/>);
    });

    var categories = this.state.categories.map(function(el) {
      var count = ProjectStore.getCategoryCount(el.id);
      return(<CategoryItem category={el} key={el.id} count={count} />);
    });
    var all = {title: "All"};
    categories.push(<CategoryItem category={all} key={99} />);

    return(

    <div>

      <div className="category-intro">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 inner-category-intro">
            <h4>
              Underway is a place where ideas are born. If you have an idea, create a
              project! You can also join someone else’s voyage below.
            </h4>
          </div>
        </div>
      </div>

      <div className="category-selections">
        <div className="row">
          <div className="inner-category-selection">
            {categories}
          </div>
        </div>
      </div>

      <div className="row">
        <h2 className="trending-title">Trending now:</h2>
      </div>
        {mostFundedProjects}
      </div>

    );
  }

});

module.exports = Discover;


// <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
//     <li data-target="#carousel-example-generic" data-slide-to="1"></li>
//     <li data-target="#carousel-example-generic" data-slide-to="2"></li>
//   </ol>
//
//   <div className="carousel-inner" role="listbox">
//
//     <div className="item active">
//       <img src="http://res.cloudinary.com/dur3lr9q4/image/upload/v1456883738/o284ebn1axjajhcxzg9z.jpg" alt="..."></img>
//       <div className="carousel-caption">
//       </div>
//     </div>
//
//     <div className="item">
//       <img src="..." alt="..."></img>
//       <div className="carousel-caption">
//         ...
//       </div>
//     </div>
//     this is lower than the others
//   </div>
//
//   <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
//     <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
//     <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
