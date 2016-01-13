var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = require('./autocomplete.jsx');

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
        <h6>Autocomplete here</h6>
        <Autocomplete names={names}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets />, document.getElementById("root"));
});
