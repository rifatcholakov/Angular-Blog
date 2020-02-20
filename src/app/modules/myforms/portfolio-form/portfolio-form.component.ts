import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { PortfolioItem } from 'src/app/shared/interfaces/portfolio-item';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  @ViewChild('portfolioForm', { static: false }) portfolioForm; 
  id: string;
  createdAt: number;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.portfolioForm.valid) {
      const portfolioItem: PortfolioItem = {
        projectName: this.portfolioForm.controls.projectName.value,
        projectImage: this.portfolioForm.controls.imageUrl.value,
        projectUrl: this.portfolioForm.controls.projectUrl.value,
        id: this.portfolioForm.controls.projectName.value.split(' ').join('-').toLocaleLowerCase(),
        createdAt: (new Date()).getTime()
      }

      this.api.createPortfolioItem(portfolioItem, portfolioItem.id);
    }
  }

}
