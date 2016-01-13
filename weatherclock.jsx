var React = require('react');

var Clock = react.createClass({
  getInitialState: function() {
    return { this.time = new Date() }
  },

  render: function() {

  }
});

var Weather = react.createClass({
  getInitialState: function() {

  },

  render: function() {

  }
});

module.exports{
  Clock: Clock,
  Weather: Weather
};
