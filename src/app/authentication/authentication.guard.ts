import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';


import { AuthenticationService } from '../authentication/authentication.service';



@Injectable()
export class AuthenticationGuard implements CanActivate {
  
  constructor( private auth: AuthenticationService,  private _router: Router) {} 
    
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      if (!this.auth.isSuperAdmin) {
      //this._router.navigate(['/User']);
      return false;
    }
    
    return true;
  }
}
