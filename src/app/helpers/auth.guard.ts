import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Authenticationservice } from '../services/authenticationService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: Authenticationservice
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currenUser = this.authService.currentUserValue;
    if (currenUser) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
