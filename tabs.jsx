var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return({
      selectedTabIndex: 0
    })
  },

  render: function() {
    var tabs = this.props.tabItems.map(function(tab) {
      return (
        <li>{tab.title}</li>
      )
    });
    var art = this.props.tabItems[this.state.selectedTabIndex].content;

    return (
      <div>
        <ul>{tabs}</ul>
        <article>{art}</article>
      </div>
    )
  }
});

module.exports = Tabs
