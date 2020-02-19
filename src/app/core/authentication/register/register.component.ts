import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm', { static: false}) form;
  @ViewChild('userEmail', { static: false}) email;
  @ViewChild('userPassword', { static: false}) password;

  constructor(public authSevice: AuthenticationService) { }

  ngOnInit() {
    this.authSevice.error = null;
  }

  onSubmit() {
    if(this.form.valid) {
      this.authSevice.register(this.email.value, this.password.value)
    }
  }

}
