import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ActionsService {
  questionsList:object[];
  constructor() { 
    this.questionsList = [{question: "What's the name of England queen?",
                      answer1 : "Elizebeth the 1st",
                      answer2 : "Elizebeth the 2st",
                      answer3 : "Elizebeth the 3st",
                      answer4 : "Elizebeth the 4st",
                      },{question: "What's the surname of current U.S. president?",
                      answer1 : "Trump",
                      answer2 : "Tramp",
                      answer3 : "Trevor",
                      answer4 : "Obama",
                      },{question: "When was JFK murdered?",
                      answer1 : "1971",
                      answer2 : "1951",
                      answer3 : "1963",
                      answer4 : "1990",
                      },{question: "Where was JFK murdered?",
                      answer1 : "Dallas",
                      answer2 : "Houston",
                      answer3 : "New York",
                      answer4 : "Boston",
                      },{question: "What's the name of the 1st drummer of the Beatles?",
                      answer1 : "Ariel",
                      answer2 : "Jake",
                      answer3 : "Ringo",
                      answer4 : "Pete",
                      },{question: "What's the name of England queen before 500 years?",
                      answer1 : "Elizebeth the 1st",
                      answer2 : "Elizebeth the 2st",
                      answer3 : "Elizebeth the 3st",
                      answer4 : "Elizebeth the 4st",
                      },{question: "What's the surname of last U.S. president before Trump?",
                      answer1 : "Trump",
                      answer2 : "Tramp",
                      answer3 : "Trevor",
                      answer4 : "Obama",
                      },{question: "when was JFK murdered?",
                      answer1 : "1971",
                      answer2 : "1951",
                      answer3 : "1963",
                      answer4 : "1990",
                      },{question: "Where was JFK murdered??",
                      answer1 : "Dallas",
                      answer2 : "Houston",
                      answer3 : "New York",
                      answer4 : "Boston",
                      },{question: "What's the name of the 2nd drummer of the Beatles?",
                      answer1 : "Ariel",
                      answer2 : "Jake",
                      answer3 : "Ringo",
                      answer4 : "Pete",
                      }]
 
  }
  getQuestionsList(){
    return this.questionsList;
  }
  test(){
    console.log("test");
  }
}
