import { Component } from '@angular/core';
import { ProductServiceService } from '../services/products/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product:any ;
id!:number;
constructor(
  private productService:ProductServiceService,
  private activateRoute: ActivatedRoute,

  ) {}
ngOnInit() {
  this.getProduct();
}

x = `${environment.imgUrl}products/`;
ex = '.png';

mainProductImage: string = '';
thumbnailImages: string[] = [
  `1${this.ex}`,
  `2${this.ex}`,
  `3${this.ex}`,
  `4${this.ex}`,
];

getProduct() {
  this.activateRoute.params.subscribe((params) => {
    this.id = +params['id'];
    this.productService.getProductById(this.id).subscribe((data) => {
      this.product = Object.values(data)[0];
      // this.mainProductImage = `${this.x}${this.product.image}`;
      this.mainProductImage = `${this.x}${this.product.name}/${this.product.image}`;
    });
  });
}

changeImage(image: string): void {
  // this.mainProductImage = `${this.x}${image}`;
  this.mainProductImage = `${this.x}${this.product.name}/${image}`;
}
}