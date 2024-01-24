import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() products:any;

imgUrl = `${environment.imgUrl}`;

ngOnInit() {
  // console.log('imgUrl:', this.imgUrl);


}
}
