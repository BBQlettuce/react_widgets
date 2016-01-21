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
    return({
      location: "No location found",
      weather: "No weather info"
    });
  },

  componentDidMount: function() {
    var that = this;
    var geo = navigator.geolocation;
    var success = function(pos) {
      // that.setState({location: pos.coords});
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=645c5d39c7603f17e23fcaffcea1a3c1"
      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
          var resp = JSON.parse(req.responseText);
          that.setState({
            location: resp.name,
            weather: resp.weather[0].description
          })
          // console.log(resp);
        }
        else {
          console.log("you dun goofed");
        }
      }
      req.send();
      // console.log(url);
    };
    var error = function(err) {
      console.log(err.message);
    };
    geo.getCurrentPosition(success, error);
  },

  render: function() {
    return(
      <div>
        <p> Location: {this.state.location} </p>
        <p> Weather: {this.state.weather} </p>
      </div>
    );
  }
});

module.exports = {
  Clock: Clock,
  Weather: Weather
};
