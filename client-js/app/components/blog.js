(function(app) {
  app.Blog = Blog;
  function Blog(id, title, text, created_at) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.created_at = created_at;
  }
})(window.app || (window.app = {}));
