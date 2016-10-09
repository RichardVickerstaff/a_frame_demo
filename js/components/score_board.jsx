var React = require('react');

module.exports = React.createClass({
  displayName:'ScoreBoard',

  render: function() {
    return (
      <div>
        Score: {this.props.score}
      </div>
    );
  }
});

