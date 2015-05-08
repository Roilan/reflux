var Reflux = require('reflux');
var request = require('reqwest');
var ImageActions = require('../actions/imageactions');

var ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imagelist: [],
  url: '/dist/src/js/api.json',//'http://www.reddit.com/r/aww/.json=',

  init: function() {
    this.getList();
  },

  getList: function() {
   request({
     url: this.url,
     dataType: 'jsonp',
     success: function(data) {
       console.log('working');

       this.imagelist = data[0];
       this.trigger(this.imagelist);
     }.bind(this)
   });
  }
});

module.exports = ImageStore;