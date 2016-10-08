var React = require('react');

module.exports = React.createClass({
  displayName:'Box',

  getInitialState : function() {
    return { color : "#6173F4" };
  },

  click: function() {
    this.setState({ color : '#'+Math.floor(Math.random()*16777215).toString(16) } );
  },

  render: function() {
    return (
      <a-box id='abox' color={ this.state.color } position="0 0 -5"  onClick={ this.click } >
        <a-animation attribute="rotation" repeat="indefinite" to="0 360 0"> </a-animation>
      </a-box>
    );
  }
});

