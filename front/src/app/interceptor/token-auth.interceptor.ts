import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {
  static accessToken = '';
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({

      setHeaders: {
        Authorization: `Bearer ${TokenAuthInterceptor.accessToken}`,
      },
    });

    return next.handle(newRequest);
  }
}


