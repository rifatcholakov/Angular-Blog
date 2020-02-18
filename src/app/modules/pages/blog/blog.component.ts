import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Post } from 'src/app/shared/interfaces/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  posts: Array<Post>;
  getPostsSubscription: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPostsSubscription = this.api.getPosts().subscribe(
      (posts: Array<Post>) => this.posts = posts
                                            .sort((a, b) => { 
                                                  return b.createdAt - a.createdAt 
                                            })
    )
  }

  ngOnDestroy() {
    this.getPostsSubscription.unsubscribe();
  }
}
