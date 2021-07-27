import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MyformComponent } from './Login/myform/myform.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { UserComponent } from './user/user.component';



const routes: Routes = [  {path:'Login/myform',component: MyformComponent},

                          {path:'Admin',component: AdminComponent,canActivate: [AuthenticationGuard]},
                          {path:'User',component: UserComponent,canActivate: [AuthenticationGuard]}
                       ];
                        
                        


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
  })

export class RoutingModule{}

export const routingComponent = [ MyformComponent]


  

