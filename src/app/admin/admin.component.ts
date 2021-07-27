import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowmenuService } from '../showmenu.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { user } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  filtertext: string;
  institute: string;
  typ: any;
  options: any;
  fieldArray: Array<any> = [{name: 'Learn Vanilla Javascript!'}, {name: 'Learn HTML & CSS'}];
  newAttribute: any = {};
  reg: boolean = false
  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;
  uAdded: boolean = false;
  user = new user();
  currentUser;


  constructor(
    public showmenu: ShowmenuService,
    private _activateroute: ActivatedRoute,
    public auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.showmenu.show();
    this.showmenu.hide1();
    this.currentUser = localStorage.getItem('user');
  }

  addFieldValue(index) {
    if (this.fieldArray.length <= 100) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};

    } else {
    }
    
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    this.auth.booksData.next(this.fieldArray);
    
    console.log(this.fieldArray,'this.this.auth.booksData')
  }


  onSubmit(username, password) {
    this.user.username = username;
    this.user.password = password;
    this.auth.users.push(new user(this.user.username, this.user.password));
    this.reg = false;
    this.uAdded= true;
  }

  openRegistration(){
    this.reg = true;
    this.uAdded= false;
  }

}
