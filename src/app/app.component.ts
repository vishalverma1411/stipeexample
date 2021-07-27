import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import { ShowmenuService } from './showmenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _router:Router, public showmenu: ShowmenuService,  private auth: AuthenticationService){}
  
userType: string = '';  
showLogout:boolean = false;
sMenu;
currentUser;
  

  
ngOnInit(){
  this.currentUser = localStorage.getItem('user');
   this.showmenu.hide();
   this._router.navigate(['Login/myform']);
   
   this.auth.userType.subscribe(value => this.userType = value);  
   this.auth.showMenu.subscribe(menu=> this.sMenu = menu)
 }
 
 
 logout()
 {
   this.showmenu.hide();
   this._router.navigate(['Login/myform']);
   this.showLogout = false;
   this.sMenu = false;
   localStorage.removeItem('user');
 }
 
}
