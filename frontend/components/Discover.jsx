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

    var totalCategories = 0;

    var categories = this.state.categories.map(function(el) {
      var count = ProjectStore.getCategoryCount(el.id);
      totalCategories += count;
      return(<CategoryItem category={el} key={el.id} count={count} />);
    });

    var all = {title: "All"};
    categories.push(<CategoryItem category={all}
                                  key={99}
                                  count={totalCategories} />
    );

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
