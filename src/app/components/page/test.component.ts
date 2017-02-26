import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { QuestionModel } from './../../models/question.model';

@Component({
  selector: 'test-component',
  templateUrl: `app/components/page/test.component.html`,
  styleUrls: ['app/components/page/test.component.css']
})
export class TestComponent  {
  @Output() testComplete= new EventEmitter();
  questions: QuestionModel[] = [
    {
      Title: "Question 1",
      Question: "Add up every number from 1..100",
      Hint: "",
      Answer: "5050"
    },
    {
      Title: "Question 2 - Calculate the answer",
      Question: "12 x 3 + 2(8 - 16) = ?",
      Hint: "",
      Answer: "20"
    },
    {
      Title: "Question 3 - What is the next number in the sequence?",
      Question: "1, 3, 7, 15, 31",
      Hint: "",
      Answer: "63"
    }
  ];

  // Run when the user clicks "submit"
  submitTest(){
    this.testComplete.emit();
  }


}
