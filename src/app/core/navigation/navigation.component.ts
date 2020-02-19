import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  blogName: string = 'Rifat Cholakov'

  constructor(public auth: AuthenticationService) { 
    
  }

  ngOnInit() {
    this.auth.isLoggedIn;
    console.log();
  }

}
