var React = require('react');
var ReactDOM = require('react-dom');

var Widgets = React.createClass({
  render: function() {
    return(
      <div>widget goes here</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
