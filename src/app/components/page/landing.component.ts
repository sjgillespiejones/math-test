import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'landing-component',
  templateUrl: `app/components/page/landing.component.html`,
  styleUrls: ['app/components/page/landing.component.css']
})
export class LandingComponent  {
  @Output() startTest = new EventEmitter();

  startTestPressed(){
    this.startTest.emit();
  }
}
