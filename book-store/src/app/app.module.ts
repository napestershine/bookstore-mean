import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // componenets in this module
  declarations: [
    AppComponent
  ],
  // Imports modules it depends on
  imports: [
    BrowserModule
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
