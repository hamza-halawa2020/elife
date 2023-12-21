import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myEmail: string = 'support@rimansan.net';

  sendMessage: FormGroup;
  formSubmitted: boolean = false;
  // userService: any;

  constructor(private userService:ContactService) {
    this.sendMessage = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.sendMessage.valid) {
      const contatcData = this.sendMessage.value;

      this.userService.sendContact(contatcData).subscribe(
        (response: any) => {
          this.formSubmitted = true;
          // console.log(this.sendMessage.value);
          this.sendMessage.reset();
        },
        (error: any) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
