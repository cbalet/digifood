import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../share/models/product";
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  @Input() cart: Map<string,Product>;
  @Output() updateCart = new EventEmitter();

  public innerWidth: any;
  rows = [];
  totStock: number;
  totPrice: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.rows = Array.from(this.cart.values());
    this.calculatePrice();
  }

  /**
   * Delete product with 0 stock and Close the modal
   */
  validate(){
    Array.from(this.cart.values()).forEach(prod => {
      if (prod.cartStock==0)
        this.cart.delete(prod.name);
    });
    this.activeModal.close({cart : this.cart, totProd: this.totStock});
  }

  /**
   * add one to the product's stock
   * @param {Product} prod
   */
  moreStock(prod: Product) {
    this.cart.get(prod.name).cartStock = prod.cartStock + 1;
    this.calculatePrice();
  }

  /**
   * remove one to the product's stock
   * @param {Product} prod
   */
  lessStock(prod: Product) {
    if (prod.cartStock>-1)
    this.cart.get(prod.name).cartStock = prod.cartStock - 1;
    this.calculatePrice();
  }

  /**
   * Remove the product from the cart
   * @param product
   */
  removeProd(product){
    this.cart.delete(product.name);
    this.rows = Array.from(this.cart.values());
    this.calculatePrice();
  }

  /**
   * update total price and quantity
   */
  calculatePrice(){
    this.totPrice = 0;
    this.totStock = 0;
    Array.from(this.cart.values()).forEach(prod => {
      this.totPrice += prod.price*prod.cartStock;
      this.totStock += prod.cartStock;
    })
  }
}
