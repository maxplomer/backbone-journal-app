Journal.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],      //JST[] magically knows whats in templates folder

  render: function () {          //render puts html into $el property
    var renderedContent = this.template({
      post: this.model            // where does this.model come from
    });
    //this.$el.empty();
    this.$el.html(renderedContent);

    return this;
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  }

});