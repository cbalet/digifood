import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../share/models/product";
import {CartComponent} from "../../cart/cart.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() cart: Map<string,Product>;
  @Input() totProd: number;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  /**
   * Open cart modal
   */
  openCart(){
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.cart = this.cart;
    modalRef.result.then(modifyCart => {
      if (modifyCart){
        this.cart = modifyCart.cart;
        this.totProd = modifyCart.totProd;
      }
      modalRef.dismiss();
    });
  }
}
