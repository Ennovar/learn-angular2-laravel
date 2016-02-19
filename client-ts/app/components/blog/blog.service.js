System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1) {
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
    var core_1, http_1, Observable_1;
    var BlogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlogService = (function () {
                function BlogService(http) {
                    this.http = http;
                    this._blogUrl = 'http://localhost:8000/blogs/';
                }
                // Get all of the blogs
                BlogService.prototype.getAll = function () {
                    return this.http.get(this._blogUrl).map(function (res) { return res.json(); }).catch(this.handleError);
                };
                // Get blog by id
                BlogService.prototype.getById = function (id) {
                    return this.http.get(this._blogUrl + id).map(function (res) { return res.json(); }).catch(this.handleError);
                };
                // Delete blog by id
                BlogService.prototype.deleteById = function (id) {
                    return this.http.delete(this._blogUrl + id).map(function (res) { return res.json(); }).catch(this.handleError);
                };
                BlogService.prototype.create = function (blog) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var payload = JSON.stringify({ "title": blog.title, "text": blog.text });
                    console.log(payload);
                    return this.http.post(this._blogUrl, payload, {
                        headers: headers
                    }).map(function (res) { return res.json(); }).catch(this.handleError);
                };
                BlogService.prototype.handleError = function (error) {
                    console.log("error on request");
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                BlogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlogService);
                return BlogService;
            }());
            exports_1("BlogService", BlogService);
        }
    }
});
//# sourceMappingURL=blog.service.js.map