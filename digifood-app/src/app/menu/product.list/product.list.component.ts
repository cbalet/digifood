import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../share/models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];

  constructor() { }

  ngOnInit() {
  }

}
