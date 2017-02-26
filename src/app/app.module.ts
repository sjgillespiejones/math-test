import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

// Pages
import { LandingComponent } from './components/page/landing.component';
import { TestComponent } from './components/page/test.component';
import { ResultComponent } from './components/page/result.component';

// UI Components
import { HeadingComponent } from './components/ui/heading.component';
import {QuestionComponent } from './components/ui/question.component';
import {AnswerComponent} from './components/ui/answer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    // Pages
    LandingComponent,
    TestComponent,
    ResultComponent,
    // UI components
    HeadingComponent,
    QuestionComponent,
    AnswerComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
