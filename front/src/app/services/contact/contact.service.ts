import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.backEndUrl;

  constructor(private http:HttpClient) {}

  sendContact(contact:any){
    return this.http.post(`${this.apiUrl}contacts`, contact);

  }
}
// contact(contact: any) {
//   return this.http.post(`${this.apiUrl}contacts`, contact);
// }}
