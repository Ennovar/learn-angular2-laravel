import {AppComponent}     from './app.component';
import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {BlogService} from './components/blog/blog.service'
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue : '/' }),
  HTTP_PROVIDERS,
  BlogService
]);
