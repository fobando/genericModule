/**
 
 * Changes to this service should be documented below.
 * Date, Author, Description
 * 01/Junio/2018   , EyC  , Creation of the http interceptor 
 *
 */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const apiAuthKey = environment.autenticationApiKey;

    const authReq = req.clone({
         // This is the apiKey for the Auth service, please add any other
         // apiKey you may wish to add on each request.
         headers : req.headers.set('apiAuthKey', apiAuthKey)
     });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }

}
