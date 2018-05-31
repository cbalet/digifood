import { Component } from '@angular/core';
import {CartService} from "./service/cart.service";
import {Cart} from "./share/models/cart";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
cart: Cart;

  constructor(private cartService : CartService) {
    this.cartService.getCart().subscribe(value => {
      this.cart = value;
    })
  }


}