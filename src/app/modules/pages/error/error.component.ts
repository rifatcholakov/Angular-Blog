import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  backgroundUrl: string = '/assets/images/error.jpg';
  title: string = 'Sorry, something went wrong';
  subtitle: string = '';
  @Input() errorMessage = "The page you're looking for doesn't exist :(";

  constructor() { }

  ngOnInit() {
  }

}
