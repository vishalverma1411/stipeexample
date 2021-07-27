import { Injectable } from '@angular/core';
import { user } from '../user';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
  user = new user();
  
  booksData = new BehaviorSubject([{name: 'Learn Vanilla Javascript!'}, {name: 'Learn HTML & CSS'}]);
  userType: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.getUserType()
  );

  users = [new user('admin', '123'), new user('user1', '123')];
  showMenu = new BehaviorSubject(false);

  constructor(private _router: Router) {}

  getUserType() {
    return localStorage.getItem('user');
  }

  get isLoggedIn() {
    return true;
  }

  get isSuperAdmin() {
    // if (this.user.username === 'admin') {
    //   return true;
    // } else if (this.user.username === 'manager'){
    //   return true;
    // } else if (this.user.username === 'manager1'){
    //   return true;
    // } else{
    //   return false;
    // }

    let authenticatedUser = this.users.find(
      u => u.username === this.user.username
    );

    if (authenticatedUser && authenticatedUser.password == this.user.password) {
        return true;
        
      }else {
        return false;
      }
    
  }

  login(username, password) {
    this.user.username = username;
    this.user.password = password;
    console.log(this.users, 'admin');

    let authenticatedUser = this.users.find(
      u => u.username === this.user.username
    );

    console.log(authenticatedUser, 'authenticatedUser');
    if (authenticatedUser && authenticatedUser.password == this.user.password) {
      this.showMenu.next(true);
      localStorage.setItem('user', this.user.username);
      this.userType.next(this.user.username);
      if(this.user.username == 'admin'){

        this._router.navigate(['/Admin']);
      } else {
        this._router.navigate(['/User']);
      }

    } else {
      alert('Please Enter Valid Username/Password..!!');
    }
  }
}
