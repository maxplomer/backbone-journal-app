Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow"
  },

  postShow: function (id) {

    var post = Journal.Collections.posts.get(id); //.posts???

    var showView = new Journal.Views.PostShow({
      model: post
    });
    //showView.render();

    this._swapView(showView);
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $("body").html(newView.render().$el);

    this.currentView = newView;
  }
});

