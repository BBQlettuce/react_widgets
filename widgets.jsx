var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = require('./autocomplete.jsx');
var Weatherclock = require('./weatherclock.jsx');
// clock and weather separate?
var Clock = Weatherclock.Clock;
var Weather = Weatherclock.Weather;

var names = [
  "Nico",
  "Eli",
  "Nozomi",
  "Umi",
  "Maki",
  "Rin"
]

var Widgets = React.createClass({
  render: function() {
    return(
      <div>
        <h3>Autocomplete</h3>
        <Autocomplete names={names}/>
        <br/>
        <h3>Weatherclock</h3>
        <Clock/>
        <Weather/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets />, document.getElementById("root"));
});
