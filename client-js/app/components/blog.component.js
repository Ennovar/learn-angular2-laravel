(function(app) {
  app.BlogComponent =
    ng.core.Component({
      selector: 'blog',
      templateUrl: 'app/components/blog.html'
    })
    .Class({
      constructor: function(blog) {
        this.model = blog
      }
    });
})(window.app || (window.app = {}));
