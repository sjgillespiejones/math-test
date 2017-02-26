import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: `app/app.component.html`,
  styleUrls: ['app/app.component.css']
})

// App Component - provides the layout and styles for the app as a whole
export class AppComponent  {
  pageState = {
    landing: true,
    test: false
  }

  startTest(){
    this.pageState.landing = false;
    this.pageState.test = true;
  }
}
