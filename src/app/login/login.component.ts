import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuth } from '../models/user.interface';
import { environment } from '../../environments/environment';
import { ROUTE } from '../models/route.constants';
import { MatSnackBar } from '@angular/material';
import { LoginMsgComponent } from '../components/login-msg/login-msg.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  private user: UserAuth = <null>{};

  constructor(private route: Router,
    private loginService: LoginService,
    public snackBar: MatSnackBar) {

    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() { }

  openSnackBar(msg) {
    this.snackBar.openFromComponent(LoginMsgComponent, {
      duration: 5000,
      data: msg
    });
  }

  authenticate() {

    this.user.username = this.loginForm.get('userName').value;
    this.user.password = this.loginForm.get('password').value;
    this.user.group = environment.applicationGroupIdentifier;

    this.loginService.authenticateUser(this.user).then(resp => {
      if (resp.status === 0) {
        console.log('sucessfully authenticated' + resp.message);
        this.openSnackBar(resp.message);
        // navigate to main component
        this.route.navigate([ROUTE.MAIN]);
      } else {
        console.log('sucessfully authenticated' + resp.message);
        this.openSnackBar(resp.message);
      }

    }).catch(err => {
      console.log('Unsucessfully', err);
      this.openSnackBar(err);
    });
  }
}
