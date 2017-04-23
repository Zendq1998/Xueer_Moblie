var Backbone = require("Backbone");

var CourseLike = Backbone.Model.extend({
  initialize: function(options) {
    this.options = options;
  },
  url: function() {
    var base = "/api/v1.0/courses/";
    return base + this.options.c_id + "/like/";
  }
});

module.exports = CourseLike;