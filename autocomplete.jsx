var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function () {
    return { query: "" }
  },

  render: function() {
    return (
      <div>
        <input/>
        <ul>
          <li>
            items go here
          </li>
        </ul>
      </div>
    );
  }

})

module.exports = Autocomplete;
