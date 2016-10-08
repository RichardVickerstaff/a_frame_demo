require('aframe');

var React    = require('react')
var ReactDOM = require('react-dom');
var Box = require('./components/box.jsx');

var init = function(){
  ReactDOM.render(<Box />, document.getElementById('scene'));
};

window.onload = init;
