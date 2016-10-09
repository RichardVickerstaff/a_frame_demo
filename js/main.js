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

var init = function(){
  ReactDOM.render(<Scene score={ score } />, document.getElementById('scene'));
};

window.onload = init;
