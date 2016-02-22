import {Component} from 'angular2/core';
import {Blog} from './blog';
import {BlogService} from './blog.service';
@Component({
    selector: 'blog-form',
    templateUrl: 'app/views/blogform.html',
    styleUrls: ['app/views/css/blogform.css']
})
export class BlogFormComponent {
  model = new Blog(null,"","");
  created = null
  constructor (private _blogService: BlogService) {}
  createBlog(form){
    this._blogService.create(this.model).subscribe(
                         created => this.created = created);
    console.log("hello")
  }
}
