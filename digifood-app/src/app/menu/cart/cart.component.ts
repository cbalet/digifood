import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../share/models/product";
import {CartItem} from "../../share/models/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() product: Product;
  @Input() cart: CartItem[];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}
