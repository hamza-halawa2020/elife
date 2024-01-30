import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.backEndUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origins': '*',
    }),
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  login(userData: any) {
    return this.http.post(
      `${this.apiUrl}login`,
      userData,
      // this.httpOptions,
      {
        withCredentials: true,
      }
    );
  }

  setTokenInCookie(token: string) {
    this.cookieService.set('token', token);
  }
  getTokenFromCookie(): string {
    return this.cookieService.get('token');
  }

  isLoggedIn() {
    return this.getTokenFromCookie();
  }

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['']);
  }
}
