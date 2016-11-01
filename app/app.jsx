var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// using object destructuring above, accomplishes the same as this:
// var Route = require('react-router').Route;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>, 
  document.getElementById('app')     
);