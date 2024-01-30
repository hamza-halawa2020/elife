import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import {register} from 'swiper/element/bundle';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
register();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminPanelModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
