System.register([], function(exports_1) {
    "use strict";
    var Blog;
    return {
        setters:[],
        execute: function() {
            Blog = (function () {
                function Blog(id, title, text) {
                    this.id = id;
                    this.title = title;
                    this.text = text;
                }
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});
//# sourceMappingURL=blog.js.map