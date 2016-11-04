require('aframe');

var React    = require('react')
var ReactDOM = require('react-dom');
var Scene = require('./components/scene.jsx');

var et = require('eventthing');
var score = 0;
et.on('score', function(){
  score +=1;
  init();
});

var animate = function() {
  var el = document.querySelector('#abox');
  var z = el.components.position.data.z
  var x = el.components.position.data.x
  var y = el.components.position.data.y
  el.setAttribute('position', {x: x, y: y, z: z + 0.01 })
};

var init = function(){
  ReactDOM.render(<Scene score={ score } />, document.getElementById('scene'));
};

window.onload = init;
window.setInterval(animate, 5);
