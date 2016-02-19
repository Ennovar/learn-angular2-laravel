System.register(['angular2/core', './components/blog/blog.component', './components/blog/bloglist.component', './components/blog/blogform.component', 'angular2/router'], function(exports_1) {
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
    var core_1, blog_component_1, bloglist_component_1, blogform_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (bloglist_component_1_1) {
                bloglist_component_1 = bloglist_component_1_1;
            },
            function (blogform_component_1_1) {
                blogform_component_1 = blogform_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [blog_component_1.BlogComponent, bloglist_component_1.BlogListComponent, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/views/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'BlogList', component: bloglist_component_1.BlogListComponent },
                        { path: '/:id', name: 'Heroes', component: blog_component_1.BlogComponent },
                        { path: '/create', name: 'HeroDetail', component: blogform_component_1.BlogFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map