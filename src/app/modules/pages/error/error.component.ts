import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  backgroundUrl: string = '/assets/images/error.jpg';
  title: string = 'Sorry, something went wrong';
  subtitle: string = '';
  errorMessage: string;

  constructor(private api: ApiService) {
    this.errorMessage = api.errorMessage || "The page you're looking for doesn't exist yet :(";
  }

  ngOnInit() {
    
  }

}
