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
    Explanation: "An easy way to solve this one is to add 1 to 100, then 2 to 99, and so on.\n\n" +
    "Every pair will add up to 101. Given there are 100 numbers in this sequence, there will be fifty pairs.\n\n" +
    "Therefore this can be changed to 50 x 101.",
    Question: {
      Title: "Question 1 - Calculate the answer",
      Question: "Add up every number from 1..100",
      Hint: "Try to pair the largest and smallest numbers together, ie 100 + 1",
      Answer: ""
    }
  },
  {
    ActualAnswer: "20",
    Explanation: "Remember BODMAS!\n\n" +
    "First solve the brackets 8 - 16 = -8, which gives 12 x 3 + 2 x (-8)\n\n" +
    "Next multiply out everything: 12 x 3 = 36, 2 x -8 = -16. This gives 36 - 16\n\n" +
    "Finally solve the subtraction: 36 - 16 = 20",
    Question:{
      Title: "Question 2 - Calculate the answer",
      Question: "12 x 3 + 2 x (8 - 16) = ?",
      Hint: "Brackets first!",
      Answer: ""
    }
  },
  {
    ActualAnswer: "63",
    Explanation: "Subtract every number from the previous number in the sequence.\n\n" +
    "3 - 1 = 2, 7 - 3 = 4, 15 - 7 = 8, 31 - 15 = 16\n\n" +
    "This shows the next number in the sequence is the previous number, plus a value that doubles: 2, 4, 8, 16\n\n" +
    "Therefore the next double number to be added is 2 x 16 = 32.\n\n" +
    "Therefore the next number is 31 + 32 = 63",
    Question:{
      Title: "Question 3 - What is the next number in the sequence?",
      Question: "1, 3, 7, 15, 31",
      Hint: "Look at the difference between each number to notice a pattern.",
      Answer: ""
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
