import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [CommonModule ],
  
  
  exports:[MatInputModule,MatToolbarModule,MatMenuModule,MatIconModule, MatListModule,BrowserAnimationsModule,MatButtonModule,MatFormFieldModule ]})
  
  export class MaterialModule{}
  
  
  