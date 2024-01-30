import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenAuthInterceptor } from 'src/app/interceptor/token-auth.interceptor';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  login: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private auth: UserService,
    private router: Router
  ) {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.login.valid) {
      this.formSubmitted = true;
      this.auth.login(this.login.value).subscribe({
        next: (res: any) => {
          const took = (TokenAuthInterceptor.accessToken = res.token);
          this.login.reset();
          this.auth.setTokenInCookie(res.role);
          this.auth.setTokenInCookie(res.token);

          this.router.navigate(['/']);
        },
        error: (err) => {

        },
      });
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');

    }
  }
}
