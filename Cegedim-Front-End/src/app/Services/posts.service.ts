import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) 
  { }

  // Get all posts list
  postsList() : Observable<any>
  {
    return this.http.get("http://localhost:8989/api/posts/getPosts")
    .map(
      (response => 
        {
          return response
        }
      ));
  }


}
