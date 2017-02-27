import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { QuestionModel } from './../../models/question.model';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'test-component',
  templateUrl: `app/components/page/test.component.html`,
  styleUrls: ['app/components/page/test.component.css']
})
export class TestComponent  {
  @Output() testComplete= new EventEmitter();
  constructor(private testService: TestService){
    this.testService = testService
  };
  questions: QuestionModel[] = [];

  // Angular 2 lifecycle method, called when the component is displayed
  ngOnInit(){
    this.questions = this.testService.getQuestions();
  }
  // Run when the user clicks "submit"
  submitTest(){
    this.testComplete.emit();
  }


}
