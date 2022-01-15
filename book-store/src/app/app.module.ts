import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

// step 1- define routes
const routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

// step 2- make module aware (import) of these paths

@NgModule({
  // componenets in this module
  declarations: [AppComponent],
  // Imports modules it depends on
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    // make module aware of route paths
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent],
})
export class AppModule {}
