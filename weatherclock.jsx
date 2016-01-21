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
    return( { location: null } );
  },

  componentDidMount: function() {
    var that = this;
    var geo = navigator.geolocation;
    var success = function(pos) {
      // that.setState({location: pos.coords});
      console.log(pos.coords);
    };
    var error = function(err) {
      console.log(err.message);
    };
    geo.getCurrentPosition(success, error);
  },

  render: function() {
    return(
      <div>{this.state.location}</div>
    );
  }
});

module.exports = {
  Clock: Clock,
  Weather: Weather
};
