/**
 * Created by Stephen on 27/02/2017.
 */
import { Injectable } from '@angular/core';
import {AnswerModel} from "../models/answer.model";
import {QuestionModel} from "../models/question.model";

// A service to allow communication between the test component and the result component
@Injectable()
export class TestService{
  Answers: AnswerModel[] = [{
    ActualAnswer: "5050",
    Explanation: "",
    Question: {
      Title: "Question 1 - Calculate the answer",
      Question: "Add up every number from 1..100",
      Hint: "",
      Answer: "5050"
    }
  },
  {
    ActualAnswer: "20",
    Explanation: "",
    Question:{
      Title: "Question 2 - Calculate the answer",
      Question: "12 x 3 + 2(8 - 16) = ?",
      Hint: "",
      Answer: "20"
    }
  },
  {
    ActualAnswer: "63",
    Explanation: "",
    Question:{
      Title: "Question 3 - What is the next number in the sequence?",
      Question: "1, 3, 7, 15, 31",
      Hint: "",
      Answer: "63"
    }
  }];

  // Called by the result component
  getAnswers(): AnswerModel[]{
    return this.Answers;
  }

  getQuestions(): QuestionModel[]{
    var questions: QuestionModel[] = [];
    for(let i = 0; i < this.Answers.length; i++){
      questions.push(this.Answers[i].Question);
    }

    return questions;
  }
}
