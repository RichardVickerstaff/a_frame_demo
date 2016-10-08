require('aframe');

var init = function(){
  scene = document.getElementById('scene')
  scene.insertAdjacentHTML("beforeend", '<a-box color="#6173F4" position="0 0 -5"> <a-animation attribute="rotation" repeat="indefinite" to="0 360 0"></a-animation> </a-box>');
};


window.onload = init;
