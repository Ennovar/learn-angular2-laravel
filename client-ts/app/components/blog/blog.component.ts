import {Component, Input} from 'angular2/core';
import {Blog} from './blog';
import {BlogService} from './blog.service';
@Component({
    selector: 'blog',
    templateUrl: 'app/views/blog.html'
})
export class BlogComponent {
  @Input() model: Blog;
  constructor (private _blogService: BlogService) {}
  deleteClicked(event) {
    event.preventDefault();
    this._blogService.deleteById(this.model.id)
                   .subscribe(
                     model => this.model = model);
    console.log("delete");
  }

}
