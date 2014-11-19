window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Journal.Routers.Posts($('body'));  //$('body') ???????
    Backbone.history.start();
    Journal.Collections.posts.fetch({
      success: function () {
        var postsIndex = new Journal.Views.PostsIndex({collection: Journal.Collections.posts});
        $('body').append(postsIndex.render().$el)
      }
    });



  }
};

$(document).ready(function(){
  Journal.initialize();
});
