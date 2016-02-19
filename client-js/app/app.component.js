(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-blog-app',
      directives: [app.Blog],
      templateUrl: 'app/app.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
