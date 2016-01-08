var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = require('./autocomplete.jsx');

var names = [
  "Nico",
  "Eli",
  "Nozomi",
  "Umi",
  "Maki"
]

var Widgets = React.createClass({
  render: function() {
    return(
      <div>asdf
        <Autocomplete/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets />, document.getElementById("root"));
});
