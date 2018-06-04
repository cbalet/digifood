import { Component, OnInit } from '@angular/core';
import {Menu} from "../share/models/menu";
import {CartService} from "../service/cart.service";
import {Product} from "../share/models/product";
import {Category} from "../share/models/category";
import {CartItem} from "../share/models/cart-item";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from "./cart/cart.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Menu = new Menu();
  cart: CartItem[]=[];
  products: Product[];

  constructor(private cartService : CartService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(value => {
      this.menu = value;
      this.products = this.menu.categories[0].products;
    })
  }

  changeCategory(category) {
    this.products = this.findTheCategory(category).products;
  }

  findTheCategory(category):Category{
    let theCat = new Category();
    this.menu.categories.forEach(cat => {
      if (cat.name==category) theCat = cat;
    });
    return theCat;
  }

  addCart(product) {
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.cart = this.cart;
    modalRef.result.then(value => {
      modalRef.dismiss();
    });
  }
}
