require('aframe');

var React    = require('react')
var ReactDOM = require('react-dom');
var Scene = require('./components/scene.jsx');

var init = function(){
  ReactDOM.render(<Scene />, document.getElementById('scene'));

  var box = document.getElementById('abox');
};

window.onload = init;
