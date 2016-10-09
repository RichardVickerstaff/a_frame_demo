var React = require('react');

var Box = require('./box.jsx');
var Camera = require('./camera.jsx');
var ScoreBoard = require('./score_board.jsx');

module.exports = React.createClass({
  displayName:'Scene',

  render: function() {
    return (
      <a-scene>
        <ScoreBoard score={ this.props.score}/>
        <Box />
        <Camera />
      </a-scene>
    );
  }
});

