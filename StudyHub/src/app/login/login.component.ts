import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // constructor() { }

  ngOnInit() {

  }

  // onSubmit(form: NgForm){
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   console.log(email);
  //   console.log(password);
    // this.afService.loginWIthGoogle();
  // }

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

}
