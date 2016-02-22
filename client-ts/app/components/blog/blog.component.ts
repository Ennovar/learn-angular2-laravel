import {Component, Input} from 'angular2/core';
import {Blog} from './blog';
import {BlogService} from './blog.service';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';

@Component({
    selector: 'blog',
    templateUrl: 'app/views/blog.html',
    styleUrls: ['app/views/css/blog.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class BlogComponent {
  @Input() model: Blog;
  id = null;
  constructor (private _blogService: BlogService, params: RouteParams) {
    if(params.get('id')){
      this.id = params.get('id');
    }
  }
  ngOnInit() {
    this.getBlog();
    if(this.model){
      this.id = this.model.id;
    }
  }
  getBlog(){
    if(!this.model){
      this._blogService.getById(this.id)
                     .subscribe(
                       model => this.model = model);
    }
  }
  deleteClicked(event) {
    event.preventDefault();
    this._blogService.deleteById(this.model.id)
                   .subscribe(
                     model => this.model = model);
  }

}
