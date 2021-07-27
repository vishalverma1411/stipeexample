import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule, routingComponent } from './app-routing.module';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material.module'; 
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { ShowmenuService } from './showmenu.service';  


import { AppComponent } from './app.component';
import { MyformComponent } from './Login/myform/myform.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';





@NgModule({

  declarations: [
              AppComponent, routingComponent, 
    
               MyformComponent,  AdminComponent, UserComponent
                ],

  imports: [BrowserModule,  RoutingModule,   
            FormsModule,ReactiveFormsModule,
            MaterialModule ,
            FlexLayoutModule, HttpClientModule
            ],

  entryComponents:[  ],

  providers: [ShowmenuService,AuthenticationService, AuthenticationGuard],

  bootstrap: [AppComponent]

})

export class AppModule { }
