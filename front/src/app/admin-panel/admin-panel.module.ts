import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminContactComponent,
    AdminLoginComponent,
    AddProductComponent
  ],
  exports:[
    AdminContactComponent,
    AdminLoginComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
    
  ],
})
export class AdminPanelModule { }
