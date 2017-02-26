import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// Pages
import { LandingComponent } from './components/page/landing.component';
import { TestComponent } from './components/page/test.component';

// UI Components
import { HeadingComponent } from './components/ui/heading.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    LandingComponent,
    TestComponent,
    HeadingComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
