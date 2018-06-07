import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Menu} from "../share/models/menu";
import {CartService} from "../service/cart.service";
import {Product} from "../share/models/product";
import {Category} from "../share/models/category";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from "ngx-toastr";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  menu: Menu = new Menu();
  cart: Map<string,Product> = new Map<string, Product>();
  products: Product[];
  private totProd: number =0;

  constructor(private cartService : CartService,
              private modalService: NgbModal,
              private sanitizer: DomSanitizer,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.toastrService.toastrConfig.positionClass = 'toast-bottom-center';
    this.cartService.getCart().subscribe(value => {
      this.menu = value;
      this.products = this.menu.categories[0].products;
      // this.products.forEach(value1 => value1.image.replace(' ','%20'))
    });
  }

  changeCategory(category) {
    this.products = this.findTheCategory(category).products;
    // this.products.forEach(value1 => value1.image.replace(' ','%20'))
  }

  findTheCategory(category):Category{
    let theCat = new Category();
    this.menu.categories.forEach(cat => {
      if (cat.name==category) theCat = cat;
    });
    return theCat;
  }

  addCart(product) {
    this.toastrService.error('<b>'+product.name+'</b> ajouté à votre panier',"",{enableHtml:true});
    if (this.cart.get(product.name)){
      this.cart.get(product.name).cartStock +=1;
    } else{
      product.cartStock = 1;
      this.cart.set(product.name, product)
    }
    this.calcTotProd();
  }

  calcTotProd(){
    this.totProd = 0;
    Array.from(this.cart.values()).forEach(value => {
      this.totProd += value.cartStock;
    })
  }

  cleanUrl(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle("url(\""+image+"\")");
  }
}
