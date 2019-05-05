import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './payment/payment.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [    {
  path: "shoppingCart",
  component: ShoppingCartComponent,
  pathMatch: 'full'
},    {
  path: "payment",
  component: PaymentComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
