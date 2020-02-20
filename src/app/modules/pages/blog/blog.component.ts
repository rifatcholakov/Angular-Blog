import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Post } from 'src/app/shared/interfaces/post';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  posts: Array<Post>;
  getPostsSubscription: Subscription;

  constructor(private api: ApiService, public auth: AuthenticationService) { }

  ngOnInit() {
    this.getPostsSubscription = this.api.getPosts().subscribe(
      (posts: Array<Post>) => this.posts = posts.sort((a, b) => b.createdAt - a.createdAt)
    )
  }

  ngOnDestroy() {
    this.getPostsSubscription.unsubscribe();
  }
}
