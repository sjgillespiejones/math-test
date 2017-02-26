import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: `app/components/page/test.component.html`,
  styleUrls: ['app/components/page/test.component.css']
})
export class TestComponent  {
  @Output() testComplete= new EventEmitter();

  // Run when the user clicks "submit"
  submitTest(){
    this.testComplete.emit();
  }
}
