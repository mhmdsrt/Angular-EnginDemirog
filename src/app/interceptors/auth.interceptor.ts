import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token"); // eğer bir istek yapacaksak ve token 'ımız varsa isteğin içine token'ı da ekleyip öyle gönder ki her seferinde token'a ihtiyac olmasın
    let newRequest: HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + token)
    })
    return next.handle(newRequest);
  }
}
