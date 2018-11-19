import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LandingComponent} from './components/landing/landing.component';
import {LandingAdminComponent} from './components/landing-admin/landing-admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatGridListModule, MatListModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    LandingAdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
