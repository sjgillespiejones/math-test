import { Component, Input } from '@angular/core';
import {QuestionModel} from "../../models/question.model";

@Component({
  selector: 'question-component',
  templateUrl: `app/components/ui/question.component.html`,
  styleUrls: ['app/components/ui/question.component.css']
})
// A general component for test questions
export class QuestionComponent  {
  @Input() model: QuestionModel;
}
