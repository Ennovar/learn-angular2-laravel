System.register(['angular2/core', './blog.component', './blog.service', './blogform.component'], function(exports_1) {
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
    var core_1, blog_component_1, blog_service_1, blogform_component_1;
    var BlogListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            },
            function (blogform_component_1_1) {
                blogform_component_1 = blogform_component_1_1;
            }],
        execute: function() {
            BlogListComponent = (function () {
                function BlogListComponent(_blogService) {
                    this._blogService = _blogService;
                    this.blogs = [];
                    this.errorMessage = "";
                }
                BlogListComponent.prototype.ngOnInit = function () { this.getBlogs(); };
                BlogListComponent.prototype.getBlogs = function () {
                    var _this = this;
                    this._blogService.getAll()
                        .subscribe(function (blogs) { return _this.blogs = blogs; });
                };
                BlogListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/bloglist.html',
                        directives: [blog_component_1.BlogComponent, blogform_component_1.BlogFormComponent],
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], BlogListComponent);
                return BlogListComponent;
            }());
            exports_1("BlogListComponent", BlogListComponent);
        }
    }
});
//# sourceMappingURL=bloglist.component.js.map