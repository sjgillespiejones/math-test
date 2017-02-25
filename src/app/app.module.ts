import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// Pages
import { LandingComponent } from './components/page/landing.component';

// UI Components

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    LandingComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
