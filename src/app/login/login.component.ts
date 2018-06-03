import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuth } from '../models/user.interface';
import { environment } from '../../environments/environment';
import { ROUTE } from '../models/route.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  private user: UserAuth = <null>{};

  constructor(private route: Router, private loginService: LoginService ) {

    this.loginForm = new FormGroup({
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
});
   }

  ngOnInit() { }

  authenticate() {

    this.user.username = this.loginForm.get('userName').value;
    this.user.password = this.loginForm.get('password').value;
    this.user.group    = environment.applicationGroupIdentifier;

    this.loginService.authenticateUser(this.user).then(resp => {
              console.log('sucessfully authenticated');
              // navigate to main component
              this.route.navigate([ROUTE.MAIN]);

            }).catch(err => {
          console.log('Unsucessfully', err);
    });
   }
}
