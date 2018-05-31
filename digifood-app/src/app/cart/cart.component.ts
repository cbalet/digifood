import { Component, OnInit } from '@angular/core';
import {Cart} from "../share/models/cart";
import {CartService} from "../service/cart.service";
import {Product} from "../share/models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  products: Product[];

  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(value => {
      this.cart = value;
      this.products = this.cart.categories[0].products;
    })
  }

  changeProductList(category) {
    let catIndex = this.cart.categories.indexOf(category);
    this.products = this.cart.categories[catIndex].products;
  }
}
