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
         images.push({
           thumbnail: item.data.thumbnail,
           url: 'http://reddit.com' + item.data.permalink
         });
       });

       this.trigger({imagelist: images});
     }.bind(this)
    });
  }
});

module.exports = ImageStore;