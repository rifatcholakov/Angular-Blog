import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  name: string;

  constructor() { }

  ngOnInit() {
    this.year = (new Date()).getFullYear();
    this.name = 'Rifat Cholakov';
  }

}
