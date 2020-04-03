import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this.ROOT_URL}/posts`);
  }
}
