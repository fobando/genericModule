/**
 * This is the guardian for all the routes that you specified in the route.module.ts
 * It is a simple ifthenelse but saves a lot of time when developing and 
 * needed to guard specific ruotes in the application
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService  } from './login.service';
import { ROUTE } from '../models/route.constants';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(public loginService: LoginService, public router: Router ) { }

  canActivate(): boolean {
    if (this.loginService.isLogged) {
          return this.loginService.isLogged;
    } else {
      this.router.navigate([ROUTE.AUTH]);
      return false;
    }
   }
}
