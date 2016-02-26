var React = require('react');
var Logo = require('./menuitems/logo');
var Discover = require('./menuitems/discover');
var Create = require('./menuitems/create');
var Profile = require('./menuitems/profile');
var SignOut = require('./menuitems/SignOut');
var History = require('react-router').History;




// <nav className="navbar navbar-default" role="navigation">
//   <div className="container">
//
//     <div className="navbar-header">
//       <Logo className="navbar-brand" />
//     </div>
//
//     <ul className="nav nav-pills">
//
//       <li role="presentation"><Discover /></li>
//       <li role="presentation"><Create /></li>
//     </ul>
//
//     <ul className="nav navbar-nav navbar-right">
//       <li className="dropdown">
//         <a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu <span className="caret"></span></a>
//         <ul className="dropdown-menu" role="menu">
//           <li><a href="#">Login</a></li>
//           <li className="divider"></li>
//           <li>thing</li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </nav>

var Menu = React.createClass({
  mixins: [History],
  render: function() {
    return(

      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Logo className="navbar-brand" />
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">
              <li><a><Discover /></a></li>
              <li><a><Create /></a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#" className="dropdown-toggle" data-toggle="dropdown"
                  role="button" aria-haspopup="true" aria-expanded="false">Profile
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a>My Page</a></li>
                  <li><a>Settings</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a><SignOut /></a></li>
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </nav>
    );
  }
});



// <div className="navbar navbar-fixed-top">
//   <div className="container">
//     <div className="navbar-header">
//       <Logo className="navbar-brand" />
//       <button type="button" className="navbar-toggle" data-toggle="collapse"data-target=".navbar-collapse">
//         <span className="sr-only">Toggle nav</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//     </div>
//
//     <div className="collapse navbar-collapse">
//       <ul className="nav navbar-nav">
//         <li><Discover /></li>
//         <li><Create /></li>
//       </ul>
//     </div>
//   </div>
// </div>

// <Logo /><Discover /><Create />
// <Logo />
// <Discover />
// <Create />
// <Profile />
module.exports = Menu;

// Logo
// Discover
// Create
// Profile
