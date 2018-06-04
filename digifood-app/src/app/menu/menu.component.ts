import {Component, OnInit} from '@angular/core';
import {Menu} from "../share/models/menu";
import {CartService} from "../service/cart.service";
import {Product} from "../share/models/product";
import {Category} from "../share/models/category";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from "./cart/cart.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Menu = new Menu();
  cart: Map<string,Product> = new Map<string, Product>();
  products: Product[];

  constructor(private cartService : CartService,
              private modalService: NgbModal,
              private toastrService: ToastrService) { }

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
    this.toastrService.success('1 '+product.name+' a été ajouté à votre panier');
    if (this.cart.get(product.name)){
      this.cart.get(product.name).cartStock +=1;
    } else{
      product.cartStock = 1;
      this.cart.set(product.name, product)
    }
  }
}
