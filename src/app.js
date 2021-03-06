require("./styles/styles.scss");
var React         = require('react');
var ReactDOM      = require('react-dom');
var Router        = require('react-router').Router
var Route         = require('react-router').Route
var Link          = require('react-router').Link
var QwiltApp      = require('./components/QwiltApp.js');
var ProjectsList  = require('./components/ProjectsList');
var Square        = require('./components/Square.js')
var Project       = require('./components/Project.js')
var SignIn        = require('./components/SignIn.js')
var SignOut       = require('./components/SignOut.js')


ReactDOM.render(
  (
    <Router>
      <Route path="/" component={QwiltApp}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signout" component={SignOut}></Route>
      <Route path="/project/:projectId" component={Project}></Route>
    </Router>
  ),
  document.getElementById('app')
);
