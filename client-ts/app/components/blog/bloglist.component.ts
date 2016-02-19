import {Component, OnInit} from 'angular2/core';
import {BlogComponent} from './blog.component';
import {BlogService} from './blog.service';
import {BlogFormComponent} from './blogform.component';
@Component({
    templateUrl: 'app/views/bloglist.html',
    directives: [BlogComponent, BlogFormComponent],
})
export class BlogListComponent implements OnInit {
  blogs = [];
  errorMessage = "";
  constructor (private _blogService: BlogService) {}
  ngOnInit() { this.getBlogs(); }
  getBlogs(){
    this._blogService.getAll()
                   .subscribe(
                     blogs => this.blogs = blogs);
  }
}
