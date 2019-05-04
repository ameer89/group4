import { Component } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import {ActionsService} from './actions.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  questions: object[] = null;

  constructor(private actionsService:ActionsService){
    this.actionsService.test();
    this.questions = this.actionsService.getQuestionsList();
  }
}
