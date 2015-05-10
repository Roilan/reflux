var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imagestore');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
    //var images = this.state.imagestore.map(function(id) {
    //  return (
    //    <div className="col-sm-6">
    //      {id.index}
    //    </div>
    //  )
    //});
    // TODO: fix the above and make it an array not
    // TODO: [ []  ]
    console.log(this.state.imagestore);

    if (this.state.imagestore) {
      return (
        <div>
          <div className="row">

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