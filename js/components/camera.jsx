var React = require('react');

module.exports = React.createClass({
  displayName:'Box',

  mouseOver: function() {
    console.log('hover');
  },

  click: function() {
    console.log('click');
  },

  render: function() {
    return (
      <a-camera position="0 0 0" >
        <a-cursor color="#FF0000" />
      </a-camera>
    );
  }
});

