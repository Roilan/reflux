var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imagestore');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  getInitialState: function() {
    return {
      imagestore: {imagelist: []}
    }
  },

  render: function() {
    var images = this.state.imagestore.imagelist.map(function(image) {
      return (
        <a href={image.url} target='_blank'>
          <img src={image.thumbnail} />
        </a>
      )
    });

    return (
      <div>
        <div className="row">
          {images}
        </div>
      </div>
    )
  }
});

module.exports = ImageGrid;