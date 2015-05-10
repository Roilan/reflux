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

       this.trigger({
         imagelist: images,
         number: 1
       });
     }.bind(this)
   });
  }
});

module.exports = ImageStore;