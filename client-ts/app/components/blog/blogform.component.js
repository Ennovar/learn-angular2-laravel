System.register(['angular2/core', './blog', './blog.service'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, blog_1, blog_service_1;
    var BlogFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            BlogFormComponent = (function () {
                function BlogFormComponent(_blogService) {
                    this._blogService = _blogService;
                    this.model = new blog_1.Blog(null, "", "");
                    this.created = null;
                }
                BlogFormComponent.prototype.createBlog = function (form) {
                    var _this = this;
                    this._blogService.create(this.model).subscribe(function (created) { return _this.created = created; });
                    console.log(this.model);
                };
                BlogFormComponent = __decorate([
                    core_1.Component({
                        selector: 'blog-form',
                        templateUrl: 'app/views/blogform.html'
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], BlogFormComponent);
                return BlogFormComponent;
            }());
            exports_1("BlogFormComponent", BlogFormComponent);
        }
    }
});
//# sourceMappingURL=blogform.component.js.map