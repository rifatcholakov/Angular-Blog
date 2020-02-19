import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: false}) form;
  @ViewChild('userEmail', { static: false}) email;
  @ViewChild('userPassword', { static: false}) password;

  constructor(public authSevice: AuthenticationService) { }

  ngOnInit() {
    this.authSevice.error = null;
  }

  onSubmit() {
    if(this.form.valid) {
      this.authSevice.logIn(this.email.value, this.password.value)
    }
  }

}
