var Reflux = require('reflux');
var request = require('reqwest');
var ImageActions = require('../actions/imageactions');

var ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imagelist: [],
  url: 'http://www.reddit.com/r/aww/.json?jsonp=',

  init: function() {
    this.getList();
  },

  funcCallback: function(data) {

  },

  getList: function() {
   request({
     url: this.url,
     method: 'GET',
     crossOrigin: true,
     success: function(response) {
       var images = [];
       response.data.children.forEach(function(item) {
         images.push(item.data.thumbnail);
       });

       this.imagelist = images;
       this.trigger(this.imagelist);
     }.bind(this)
   });
  }
});

module.exports = ImageStore;