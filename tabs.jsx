var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return({
      selectedTabIndex: 0
    })
  },

  render: function() {
    return (
      <div>
        tabs go here
      </div>
    )
  }
});

module.exports = Tabs
