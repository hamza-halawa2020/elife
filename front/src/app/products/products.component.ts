import { Component } from '@angular/core';
import { ProductServiceService } from '../services/products/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products :any = [];
  
constructor(private producService:ProductServiceService){}

ngOnInit(){
  this.allProducts();
}

allProducts(){
  this.producService.getAllProducts().subscribe((data)=>{
    // this.products = data;
    this.products = Object.values(data)[0];
    // console.log("Data",this.products);
  });
}
}
