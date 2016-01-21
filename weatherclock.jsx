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
    return( { location: "No location found" } );
  },

  componentDidMount: function() {
    var that = this;
    var geo = navigator.geolocation;
    var success = function(pos) {
      // that.setState({location: pos.coords});
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long
      var req = new XMLHttpRequest();


      console.log(url);
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
