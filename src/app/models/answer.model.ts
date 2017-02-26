import {QuestionModel} from './question.model';
// A model to be used by the answer component
export class AnswerModel{
  Question: QuestionModel;
  ActualAnswer: string;
  Explanation: string;
}
