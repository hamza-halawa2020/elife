import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [
    AdminContactComponent,
    AdminLoginComponent
  ],
  exports:[
    AdminContactComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    
    
  ],
})
export class AdminPanelModule { }
