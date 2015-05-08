var React = require('react');
var ImageGrid = require('./imagegrid');
var ImageActions = require('../actions/imageactions');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>HomePage</h1>
        <button className='btn btn-primary' onClick={ImageActions.getList}>Refresh list</button>
        <ImageGrid></ImageGrid>
      </div>
    )
  }
});

module.exports = Home;