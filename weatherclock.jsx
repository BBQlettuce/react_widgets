var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return { time: new Date() }
  },

  componentDidMount: function() {
    var that = this;
    this.intId = setInterval(function() {
      that.setState({ time: new Date() })
    }, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.intId);
  },

  render: function() {
    var timeString = this.state.time.toString();
    return (
      <div>{timeString}</div>
    );
  }
});

var Weather = React.createClass({
  getInitialState: function() {

  },

  render: function() {

  }
});

module.exports = {
  Clock: Clock,
  Weather: Weather
};
