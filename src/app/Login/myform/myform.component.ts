import { Component, OnInit } from '@angular/core';
import { user } from '../../user';
import { Router } from '@angular/router';

import { ShowmenuService } from '../../showmenu.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  hide = true;
  public errorMsg = '';
  user = new user();
  public showprogressbar: boolean = false;

  constructor(
    private _router: Router,
    public showmenu: ShowmenuService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.showmenu.hide();
    this.showmenu.hide1();
  }

  onSubmit(username, password) {
    this.showprogressbar = true;
    this.user.username = username;
    this.user.password = password;
    console.log(
      'user details: ' +
        this.user.username +
        this.user.password +
        this.user +
        'user'
    );
    this.auth.login(this.user.username, this.user.password);
    // if (this.auth.login(this.user.username, this.user.password)) {
    //   this.errorMsg = 'Failed to login';
    // }
  }
}
