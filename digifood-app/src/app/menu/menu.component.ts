import { Component, OnInit } from '@angular/core';
import {Menu} from "../share/models/menu";
import {CartService} from "../service/cart.service";
import {Product} from "../share/models/product";
import {Category} from "../share/models/category";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  cart: Menu = new Menu();
  products: Product[];

  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(value => {
      this.cart = value;
      this.products = this.cart.categories[0].products;
    })
  }

  changeProductList(category) {
    this.products = this.findTheCategory(category).products;
  }

  findTheCategory(category):Category{
    let theCat = new Category();
    this.cart.categories.forEach(cat => {
      if (cat.name==category) theCat = cat;
    });
    return theCat;
  }
}
