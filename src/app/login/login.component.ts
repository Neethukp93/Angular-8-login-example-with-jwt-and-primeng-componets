import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Authenticationservice } from '../services/authenticationService';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  userData: User;
  loginErr: any = {};
  errorArray: string[] = [];
  constructor(
    private authService: Authenticationservice,
    private router: Router
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {}

  onsubmit(formValue: any) {
    this.loginErr = {};
    if (!formValue.username) {
      this.loginErr.username = 'Invalid username';
      this.errorArray.push('Invalid username');
    }
    if (!formValue.password) {
      this.loginErr.password = 'Invalid password';
      this.errorArray.push('Invalid password');
    }

    if (formValue.username && formValue.password) {
      this.authService
        .login(formValue.username, formValue.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/home']);
          },
          err => {}
        );
    }
  }

  hasError(field: string) {
    if (field in this.loginErr) {
      return true;
    }
  }
}
