import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarusolComponent } from './carusol/carusol.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';
import { CarusolItemComponent } from './carusol-item/carusol-item.component';
import {register} from 'swiper/element/bundle';
import { SliderComponent } from './slider/slider.component';
import { NotfoundComponent } from './notfound/notfound.component';

register();



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarusolComponent,
    CardComponent,
    LogoComponent,
    AboutComponent,
    CarusolItemComponent,
    SliderComponent,
    NotfoundComponent,
  ],
  exports:[
    CardComponent,
    NavbarComponent,
    LogoComponent,
    FooterComponent,
    CarusolComponent,
    SliderComponent,
    NotfoundComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
 
})
export class SharedModule { }
