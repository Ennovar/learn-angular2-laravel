import {Injectable}     from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Blog}           from './blog';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BlogService {
  constructor (private http: Http) {}

  private _blogUrl = 'http://localhost:8000/blogs/';
  // Get all of the blogs
  getAll () {
    return this.http.get(this._blogUrl).map(res => res.json()).catch(this.handleError);
  }
  // Get blog by id
  getById(id){
    return this.http.get(this._blogUrl + id).map(res => res.json()).catch(this.handleError);
  }
  // Delete blog by id
  deleteById(id){
    return this.http.delete(this._blogUrl + id).map(res => res.json()).catch(this.handleError);
  }
  create(blog){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var payload = JSON.stringify({"title": blog.title, "text": blog.text});
    console.log(payload);
    return this.http.post(this._blogUrl, payload , {
    headers: headers
    }).map(res => res.json()).catch(this.handleError);
  }
  private handleError (error: Response) {
    console.log("error on request");
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
