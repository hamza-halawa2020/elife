import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carusol-item',
  templateUrl: './carusol-item.component.html',
  styleUrls: ['./carusol-item.component.css']
})
export class CarusolItemComponent {
  @Input() data: any;
}