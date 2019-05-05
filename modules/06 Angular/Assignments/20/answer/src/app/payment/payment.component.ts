import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  f: FormGroup;
  constructor(private manage:ManageService, builder: FormBuilder) {
    this.f = builder.group({
      // username
      username: builder.group({
        cn: [
          "Shai"
        ],
        nc: [
          "Mesisterano", [
            Validators.required,
            Validators.minLength(2),
          ]
        ]
      })
    })
   }

  ngOnInit() {
    console.log(this.manage.validateCreditCard("9999-7777-8888-0000")); //working
  }

}
