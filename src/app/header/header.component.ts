import { Component, OnInit } from '@angular/core';
import { Authenticationservice } from '../services/authenticationService';
import { Router } from '@angular/router';
import { ComponentService } from '../services/componentService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userValue: any;
  constructor(
    private authService: Authenticationservice,
    private router: Router,
    private compService: ComponentService
  ) {
    if (this.authService.currentUserValue) {
      this.userValue = this.authService.currentUserValue;
    }
  }

  ngOnInit() {
    // this.compService.userLoggedOut.subscribe(value => {
    //   if (value) {
    //     this.userValue = '';
    //   }
    // });
    this.authService.currentUser.subscribe(value => {
      this.userValue = value;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
