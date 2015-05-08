var React = require('react');
var Home = require('./components/home');

var AwwApp = React.createClass({
  render: function() {
    return (
      <div>
        <Home />
      </div>
    )
  }
});

React.render(
  <AwwApp />,
  document.getElementById('app')
)