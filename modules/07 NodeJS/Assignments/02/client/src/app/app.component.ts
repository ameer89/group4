import { Component, OnInit } from '@angular/core';
import {Client} from './client.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'client';
  clients:Client[];

  constructor(){
    this.clients = [
      { first_name :"Matan", last_name :"Atiya", city :"Beer-Sheva", phone :"052-4404494", mail :"matan@gmail.com"},
      { first_name :"Daniel", last_name :"Brosh", city :"Ashkelon", phone :"054-5796354", mail :"daniel@gmail.com"},
      { first_name :"Uriel", last_name :"Alfasi", city :"Hafia", phone :"052-3396354", mail :"uriel@gmail.com"}
    ]
  }
ngOnInit(){

}
sendDataToServer(){
    postData('http://localhost:5000', {answer: 42})
    .then(data => console.log(JSON.stringify(data))) 
    .catch(error => console.error(error));

  function postData(url = '', data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: 'POST', 

          headers: {
              'Content-Type': 'application/json',

          },

          body: JSON.stringify(data), 
      })
      .then(response => response.json());
  }
}


}
