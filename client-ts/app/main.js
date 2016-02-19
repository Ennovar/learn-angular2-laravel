System.register(['./app.component', 'angular2/platform/browser', 'angular2/router', 'angular2/core', 'angular2/http', './components/blog/blog.service'], function(exports_1) {
    "use strict";
    var app_component_1, browser_1, router_1, router_2, core_1, http_1, blog_service_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' }),
                http_1.HTTP_PROVIDERS,
                blog_service_1.BlogService
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map