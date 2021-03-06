var React = require('react');
var Logo = require('./menuitems/logo');
var Discover = require('./menuitems/discover');
var Create = require('./menuitems/create');
var Profile = require('./menuitems/profile');
var UserStore = require('../stores/UserStore');
var ApiUtil = require('../util/api_util');

var History = require('react-router').History;

var Menu = React.createClass({
  mixins: [History],

  getStateFromStore: function() {
    return({User: UserStore.currentUser()});
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  _onChange: function() {
    this.setState({User: UserStore.currentUser()});
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchAllCategories();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  _clickSignOut: function() {
    ApiUtil.signOut();
  },

  _clickProfile: function() {
    this.history.push("/userDetails");
  },

  render: function() {
    var username = "Options";

    if (this.state.User != undefined) {
      username = this.state.User.username;
    }

    return(

      <nav className="navbar navbar-default">
        <div className="container-fluid hidden-xs">

          <div className="navbar-header">

            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >

              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Logo className="navbar-brand" />
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >

            <ul className="nav navbar-nav">
              <li><Discover /></li>
              <li><Create /></li>
              <li>
                <a href="//www.linkedin.com/in/robertdavidreid" id="li-logo-a">
                  <img src="/assets/linkedin_logo.png" id="li-logo"></img>
                </a>
              </li>
              <li>
                <a href="https://github.com/rdavidreid" id="gh-logo-a">
                  <img src="/assets/github_logo.png" id="gh-logo"></img>
                </a>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#" className="dropdown-toggle username-dropdown"
                  data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="username-dropdown">{username}</span>
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a onClick={this._clickProfile}>Profile</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a onClick={this._clickSignOut}>SignOut</a></li>
                </ul>
              </li>
            </ul>
            </div>
          </div>

          <div className="container-fluid visible-xs">

            <div className="navbar-header">

              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-2"
                aria-expanded="false"
              >

                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <Logo className="navbar-brand" />
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-2"
            >

              <ul className="nav navbar-nav">
                <li><Discover /></li>
                <li><Create /></li>
                <li>
                  <a href="//www.linkedin.com/in/robertdavidreid" id="li-link">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rdavidreid" id="gh-link">
                    Github
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a onClick={this._clickProfile} id="profile-link">
                    Profile
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a onClick={this._clickSignOut} id="signout-link">
                    SignOut
                  </a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
    );
  }
});

module.exports = Menu;
