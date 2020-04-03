import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ge-testing-poc';
  public posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.dataService.getPosts()
      .subscribe(data => this.posts = data);
  }
}
