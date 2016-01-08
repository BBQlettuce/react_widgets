var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function () {
    return { query: "" }
  },

  matchedNames: function () {
    return (this.props.names)
    // return list of names that match the query
  },

  render: function() {
    var matchedNames = this.matchedNames();
    var lis = [];
    for (var i = 0; i < matchedNames.length; i++) {
      var name = matchedNames[i];
      lis.push(<li key={i}>{name}</li>)
    }

    return (
      <div>
        <input/>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }

})

module.exports = Autocomplete;
