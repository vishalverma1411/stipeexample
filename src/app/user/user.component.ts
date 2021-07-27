import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ShowmenuService } from '../showmenu.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public showmenu: ShowmenuService, public auth: AuthenticationService) { }

  bookData:any;
  currentUser;

  ngOnInit(): void {
    
    this.currentUser = localStorage.getItem('user');
    console.log(this.currentUser,'datadatadata')
    setTimeout(() => {
      this.auth.booksData.subscribe(data=> {this.bookData = data; });
      console.log(this.bookData,'datadatadata')
    }, 1000);
   
  }

}
