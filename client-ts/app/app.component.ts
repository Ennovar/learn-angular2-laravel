import {Component} from 'angular2/core';
import {BlogComponent} from './components/blog/blog.component';
import {BlogListComponent} from './components/blog/bloglist.component';
import {BlogFormComponent} from './components/blog/blogform.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    directives: [BlogComponent,BlogListComponent,ROUTER_DIRECTIVES],
    templateUrl: 'app/views/app.html'
})
@RouteConfig([
  {path:'/', name: 'BlogList', component: BlogListComponent},
  {path:'/:id',        name: 'Heroes',       component: BlogComponent},
  {path:'/create',      name: 'HeroDetail',   component: BlogFormComponent}
])
export class AppComponent {

}
