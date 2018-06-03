import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/services/login.service';
import { UserLogged } from '../app/models/user.interface';
import { ROUTE } from './models/route.constants';
import { environment } from '../environments/environment';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../app/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = environment.applicationName;
  displayMenu = false;
  userInfo: UserLogged = <null>{};

  constructor(public loginService: LoginService,
    public router: Router,
    public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'true') {
        this.logOut();
      }
    });
  }

  ngOnInit() {
    this.loginService.onLogin$.subscribe(data => {
      this.displayMenu = true;
      this.userInfo = data;
    });

    this.loginService.onLogOut$.subscribe(data => {
      this.displayMenu = false;
    });
  }

  ngOnDestroy() {
    this.loginService.onLogin$.unsubscribe();
    this.loginService.onLogOut$.unsubscribe();
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate([ROUTE.ROOT]);
  }

  goHome() {
    this.router.navigate([ROUTE.MAIN]);
  }

}
