import { Injectable } from '@angular/core';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ComponentService } from './componentService';
@Injectable({ providedIn: 'root' })
export class Authenticationservice {
  private currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private http: HttpClient, private compService: ComponentService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log(`${environment.apiUrl}`);
    return (
      this.http
        .post<any>(`${environment.apiUrl}/users/authenticate`, {
          username,
          password
        })
        //  .subscribe(user => console.log(user));
        .pipe(
          map(user => {
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          })
        )
    );
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.compService.userLoggedOut.emit(true);
  }
}
