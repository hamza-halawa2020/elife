import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent {
  constructor(private messages:ContactService){}
  message: any;
  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messages.getContact().subscribe((data) => {
      this.message = Object.values(data)[0];
      // console.log("Message data", this.message);
      
    });
  }

  deleteMessage(contactId: number) {
    this.messages.deleteContact(contactId).subscribe((data) => {
      this.message = Object.values(data)[0];
      this.getMessages();
    },
    (error) => {
      console.log('error',error);
  
      });
    }
  
    getMessageById(contactId: number) {
      this.messages.getContactById(contactId).subscribe((data) => {
        this.message = Object.values(data)[0];
      },
      (error) => {
        console.log('error',error);      
        });
      }
    






}



