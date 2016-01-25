var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = require('./autocomplete.jsx');
var Weatherclock = require('./weatherclock.jsx');
// clock and weather separate?
var Clock = Weatherclock.Clock;
var Weather = Weatherclock.Weather;
var Tabs = require('./tabs.jsx');

var names = [
  "Nico",
  "Eli",
  "Nozomi",
  "Umi",
  "Maki",
  "Rin"
]

var tabItems = [
  {title: "Tab1", content: "tab1 contents"},
  {title: "Tab2", content: "tab2 contents"},
  {title: "Tab3", content: "tab3 contents"}
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
        <br/>

        <h3>Tabs</h3>
        <Tabs tabItems={tabItems}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets />, document.getElementById("root"));
});
