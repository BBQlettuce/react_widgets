var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function () {
    return { query: "" }
  },

  matchedNames: function () {
    // return list of names that match the query
    var query = this.state.query;
    if (query.length === 0) {
      return [];
    }
    // var names = this.props.names;
    var output = this.props.names.filter(function(name) {
      return (name.toLowerCase()).startsWith(query.toLowerCase());
    });
    return output;
  },

  handleQueryChange: function(event) {
    this.setState({ query: event.currentTarget.value });
  },

  handleNameClick: function(event) {
    this.setState({ query: event.currentTarget.innerText });
  },

  render: function() {
    var matchedNames = this.matchedNames();
    var lis = [];
    for (var i = 0; i < matchedNames.length; i++) {
      var name = matchedNames[i];
      lis.push(<li key={i} onClick={this.handleNameClick}>{name}</li>)
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
