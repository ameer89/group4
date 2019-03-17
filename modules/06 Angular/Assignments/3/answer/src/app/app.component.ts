import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer';
  food:string[];
  beverage:string[];
  colors:string[];
  i:number= 0;
  str:string;

  constructor(){
    this.food = ['hamburger', 'BBQ', 'salad'];
    this.beverage = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
    this.str = '';
  }

  ngOnInit(){

  }
}
