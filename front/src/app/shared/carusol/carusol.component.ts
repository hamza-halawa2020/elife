import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carusol',
  templateUrl: './carusol.component.html',
  styleUrls: ['./carusol.component.css']
})
export class CarusolComponent {
imgUrl = 'assets/img/carusol/';
ex = '.jpg';

startNumber = 2;
endNumber = 7;

carouselItems:any[] = [];

  constructor() {
    this.generateCarouselItems();
  }
  generateCarouselItems() {
    for (let i = this.startNumber; i <= this.endNumber; i++) {
      const imgPath = `${this.imgUrl}${i}${this.ex}`;
      const isActive = i === this.startNumber; 
      this.carouselItems.push({
        img: imgPath,
        active: isActive,
      });
    }
  }
}
