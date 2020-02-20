import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioItem } from 'src/app/shared/interfaces/portfolio-item';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolioItems: Array<PortfolioItem>;
  getPortfolioItemsSubscription: Subscription;

  constructor(private api: ApiService, public auth: AuthenticationService) { }

  ngOnInit() {
    this.getPortfolioItemsSubscription = this.api.getPortfolioItems().subscribe(
      (portfolioItems: Array<PortfolioItem>) => this.portfolioItems = portfolioItems.sort((a, b) => b.createdAt - a.createdAt)
    )
  }


  onDelete(itemId) {
    this.api.deletePortfolioItem(itemId);
  }

  ngOnDestroy() {
    this.getPortfolioItemsSubscription.unsubscribe();
  }
}
