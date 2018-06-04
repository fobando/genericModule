import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-login-msg',
  templateUrl: './login-msg.component.html',
  styleUrls: ['./login-msg.component.css']
})
export class LoginMsgComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
