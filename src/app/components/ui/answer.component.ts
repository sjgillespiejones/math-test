import {Component, Input} from '@angular/core';
import {AnswerModel} from './../../models/answer.model';
@Component({
  selector: 'answer-component',
  templateUrl: `app/components/ui/answer.component.html`,
  styleUrls: ['app/components/ui/answer.component.css']
})

// Answer component
// Contains the logic for the Answer user interface
export class AnswerComponent{
  @Input() answer: AnswerModel;
  solutionShown: boolean = false;
  buttonText = "Show Solution";

  // Triggered when a user clicks show/hide solution
  toggleSolution(){
    this.solutionShown = !this.solutionShown;
    if(this.solutionShown){
      this.buttonText = "Hide Solution";
    } else {
      this.buttonText = "Show Solution";
    }
  }
}
