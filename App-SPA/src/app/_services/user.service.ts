import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username = new BehaviorSubject<string>('Pawel');
  currentUsername = this.username.asObservable();

  constructor() { }

  changeName(username: string) {
    this.username.next(username);
  }
}
