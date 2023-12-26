import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

add: FormGroup;
formSubmitted: boolean = false;

constructor(private products:ProductServiceService){

  this.add = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    description: new FormControl('', [
       Validators.required,
       Validators.minLength(5),
       Validators.maxLength(255),
      ]),
      image: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16),
    ]),
  });
}

onSubmit() {
  if (this.add.valid) {
    const productData = this.add.value;

    this.products.AddProduct(productData).subscribe(
      (response: any) => {
        this.formSubmitted = true;
        // console.log(this.sendMessage.value);
        this.add.reset();
      },
      (error: any) => {
        console.error('failed:', error);
      }
    );
  } else {
    console.log('Form is invalid. Please fill all the required fields.');
  }
}
}





