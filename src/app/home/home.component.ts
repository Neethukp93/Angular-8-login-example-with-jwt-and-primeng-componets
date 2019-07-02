import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Authenticationservice } from '../services/authenticationService';
import { User } from '../models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userValue: User;
  users: User[] = [];
  constructor(
    private userService: UserService,
    private authService: Authenticationservice
  ) {
    this.userValue = this.authService.currentUserValue;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    // this.userService.getAllUsers().subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {}
    // );
    this.userService
      .getAllUsers()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }
}
