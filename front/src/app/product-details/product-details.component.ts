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
  id: any;
  productDetails: any;
  loading: boolean = false;
  imgUrl = environment.imgUrl;
  chunkSize = 3;
  thumbnailChunks: string[][] = [];
  mainProductImage: string = '';
  thumbnailImages: string[] = [];
constructor(
  private productService:ProductServiceService,
  private activateRoute: ActivatedRoute,

  ) {}
ngOnInit() {
  this.getProduct();
}
chunkArray(array: any[], size: number): any[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size)
  );
}


getProduct() {
  this.activateRoute.params.subscribe((params) => {
    this.id = +params['id'];
    this.productService.getProductById(this.id).subscribe((data) => {
      this.productDetails = Object.values(data)[0];
      this.thumbnailImages = this.productDetails.images.map((image: any) => image.image);
      this.thumbnailChunks = this.chunkArray(this.thumbnailImages, this.chunkSize);
      this.mainProductImage = `${this.imgUrl}${this.productDetails.images[0].image}`;

    });
  });
}

changeImage(image: string): void {
  this.mainProductImage = `${this.imgUrl}${image}`;
}

}