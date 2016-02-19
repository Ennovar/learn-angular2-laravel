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
    var BlogComponent;
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
            BlogComponent = (function () {
                function BlogComponent(_blogService) {
                    this._blogService = _blogService;
                }
                BlogComponent.prototype.deleteClicked = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._blogService.deleteById(this.model.id)
                        .subscribe(function (model) { return _this.model = model; });
                    console.log("delete");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', blog_1.Blog)
                ], BlogComponent.prototype, "model", void 0);
                BlogComponent = __decorate([
                    core_1.Component({
                        selector: 'blog',
                        templateUrl: 'app/views/blog.html'
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], BlogComponent);
                return BlogComponent;
            }());
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map