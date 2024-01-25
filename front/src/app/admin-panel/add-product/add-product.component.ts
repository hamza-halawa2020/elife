import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  add: FormGroup;
  formSubmitted: boolean = false;
  imageFile: any;

  constructor(private products: ProductServiceService) {
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
        // Validators.minLength(5),
        // Validators.maxLength(16),
      ]),
    });
  }

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
    // console.log(this.imageFile)
  }

  // generateImageUrl(image: string) {
  //   return http://localhost:8000/storage/${image};
  // }

  // [src]="generateImageUrl(pharmaData.pharmacy_image)"

  onSubmit() {
    if (this.add.valid) {


      const productData = this.add.value;
      const formData = new FormData();
      for (let i = 0; i < this.imageFile.length; i++) {
        formData.append('image[]', this.imageFile[i]);
      }

      formData.append('name', productData.name);
      formData.append('description', productData.description);

      console.log('product',formData);
      

      this.products.AddProduct(formData).subscribe(
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
