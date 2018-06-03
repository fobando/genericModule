import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './components/main/main.component';
import { RouteGuardService } from './services/route-guard.service';
import { ROUTE } from './models/route.constants';

const myRoutes: Routes = [
    { path: ROUTE.AUTH_DEF , component : LoginComponent },
    { path: ROUTE.ROOT_DEF , redirectTo : ROUTE.AUTH, pathMatch : 'full' },
    { path: ROUTE.MAIN_DEF,  component: MainComponent, canActivate: [RouteGuardService] }
];

@NgModule({
 imports: [RouterModule.forRoot(myRoutes)],
 exports: [RouterModule]
})
export class RoutingModule { }
