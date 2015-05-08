var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imagestore');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
    if (this.state.imagestore) {
      return (
        <div>
          <div className="row">
            {this.state.imagestore.map(function(id) {
              return (
                <div className="col-sm-6">
                  {id.index}
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <h1>not working</h1>
      )
    }
  }
});

module.exports = ImageGrid;