import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComponentService {
  //userLoggedIn:
  userLoggedOut: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
}
