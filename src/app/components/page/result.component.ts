import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";
import {AnswerModel} from "../../models/answer.model";

@Component({
  selector: 'result-component',
  templateUrl: `app/components/page/result.component.html`,
  styleUrls: ['app/components/page/result.component.css']
})

export class ResultComponent{
  constructor(private testService: TestService){
  }
  answers: AnswerModel[] = [];

  ngOnInit(){
    this.answers = this.testService.getAnswers();
  }
}
