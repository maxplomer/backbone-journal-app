//This is the index view object for our posts model

Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  events: {"click button.delete-post": 'deletePost'},    // when a button is clicked, call deletePost method

  initialize: function () {
    this.listenTo(
      this.collection,
      'remove add change:title reset',
      this.render
    );

  },

  render: function () {  //render puts html into $el property
    var content = this.template({ posts: this.collection });
    this.$el.html(content);
    return this;
  },

  deletePost: function (event) {
    var postId = $(event.currentTarget).data('id');
    var post = this.collection.get(postId);
    post.destroy({
      success: function () {
        alert('Destroyed!');
      }
    });
  }


});