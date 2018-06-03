import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { MaterialModule } from './app.material';
import { RoutingModule } from './router.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './components/hello/hello.component';
import { LoginService } from './services/login.service';
import { MainComponent } from './components/main/main.component';
import { RouteGuardService } from './services/route-guard.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents : [ HelloComponent, DialogComponent ],
  providers: [LoginService, RouteGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi : true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
