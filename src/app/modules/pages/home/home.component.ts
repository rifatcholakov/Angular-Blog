import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<Post>;
  getPostsSubscription: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPostsSubscription = this.api.getPosts().subscribe(
      (posts: Array<Post>) => this.posts = posts
                                            .sort((a, b) => { 
                                                  return b.createdAt - a.createdAt 
                                            })
                                            .slice(0, 3)
    )
  }

  ngOnDestroy() {
    this.getPostsSubscription.unsubscribe();
  }

}
