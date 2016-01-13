var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function () {
    return { query: "" }
  },

  matchedNames: function () {
    // return list of names that match the query
    var names = this.props.names;
    var query = this.state.query;
    // if name begins with this.state.query, then add to output
    var output = names.filter(function(name) {
      return (name.toLowerCase()).startsWith(query.toLowerCase());
    });
    return output;
  },

  handleQueryChange: function(event) {
    this.setState({ query: event.currentTarget.value });
  },

  handleNameClick: function() {

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
        <input onChange={this.handleQueryChange} value={this.state.query}/>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }

})

module.exports = Autocomplete;
