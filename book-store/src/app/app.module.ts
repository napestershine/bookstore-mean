import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BookFormComponent } from './admin/components/book-form/book-form.component';
import { BookListComponent } from './admin/components/book-list/book-list.component';

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
  { path: 'admin/book/add', component: BookFormComponent },
  { path: 'admin/book/list', component: BookListComponent },
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
    SharedModule,
    AdminModule,
    // make module aware of route paths
    RouterModule.forRoot(routes),
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent],
})
export class AppModule {}
