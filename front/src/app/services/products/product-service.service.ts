import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = environment.backEndUrl;
  //  apiUrl='http://back.elifeegypt.com/public/index.php/api/';

  constructor(private http:HttpClient) {}

  AddProduct(product:any){
    return this.http.post(`${this.apiUrl}products`, product);
  }

  getAllProducts(){
    const url = `${this.apiUrl}products`;
    return this.http.get(url);
  }
  getProductById(productId:number){
    const url = `${this.apiUrl}products/${productId}`;
    return this.http.get(url);
  }

  
}
