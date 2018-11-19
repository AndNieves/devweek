import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuardService} from './guards/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {LandingComponent} from './components/landing/landing.component';
import {AppComponent} from './app.component';
import {LandingAdminComponent} from './components/landing-admin/landing-admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'parking', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'parking', component: AppComponent, canActivateChild: [AuthGuardService], children: [
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: 'landing', component: LandingComponent},
    ]
  },
  {
    path: 'admin', component: AppComponent, canActivateChild: [AuthGuardService], children: [
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: 'landing-admin', component: LandingAdminComponent},
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: true})]
})
export class AppRoutingModule {
}
