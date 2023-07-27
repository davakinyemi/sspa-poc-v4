import { Component, OnInit } from '@angular/core';

import { AuthService, SessionService } from '@sspa-poc/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, password } = this.form;
    if (username === 'admin' && password === '123456') {
      SessionService.startSession(username, AuthService.authentication());
      this.isLoginFailed = false;
    } else {
      this.errorMessage = 'Invalid credentials';
      this.isLoginFailed = true;
    }
  }

}
