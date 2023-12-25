import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.backEndUrl;
  // apiUrl='http://back.elifeegypt.com/public/index.php/api/';


  constructor(private http:HttpClient) {}

  sendContact(contact:any){
    return this.http.post(`${this.apiUrl}contacts`, contact);
  }

  getContact(){
    return this.http.get(`${this.apiUrl}contacts`);
  }
  getContactById(contactId: number) {
    const url = `${this.apiUrl}contacts/${contactId}`;
    return this.http.delete(url);
  }

  deleteContact(contactId: number) {
    const url = `${this.apiUrl}contacts/${contactId}`;
    return this.http.delete(url);
  }
}