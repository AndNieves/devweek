import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LandingComponent} from './components/landing/landing.component';
import {LandingAdminComponent} from './components/landing-admin/landing-admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {ReservationsService} from './services/reservations.service';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    LandingAdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [AuthGuardService, ReservationsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
