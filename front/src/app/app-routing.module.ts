import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'product/:id', component: ProductDetailsComponent },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
