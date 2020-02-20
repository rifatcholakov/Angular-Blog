import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { PortfolioItem } from 'src/app/shared/interfaces/portfolio-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<Post>;
  getPostsSubscription: Subscription;

  portfolioItems: Array<PortfolioItem>;
  getPortfolioItemsSubscription: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPostsSubscription = this.api.getPosts().subscribe(
      (posts: Array<Post>) => this.posts = posts
                                            .sort((a, b) => { 
                                                  return b.createdAt - a.createdAt 
                                            })
                                            .slice(0, 3)
    )

    this.getPortfolioItemsSubscription = this.api.getPortfolioItems().subscribe(
      (portfolioItems: Array<PortfolioItem>) => this.portfolioItems = portfolioItems
                                                                      .sort((a, b) => b.createdAt - a.createdAt)
                                                                      .slice(0, 2)
    )
  }

  ngOnDestroy() {
    this.getPostsSubscription.unsubscribe();
    this.getPortfolioItemsSubscription.unsubscribe();
  }

}
