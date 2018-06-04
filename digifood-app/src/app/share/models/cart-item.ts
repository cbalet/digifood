import {Product} from "./product";

export class CartItem{

  public product: Product;
  public stock: number;


  constructor(product: Product, stock: number) {
    this.product = product;
    this.stock = stock;
  }
}
