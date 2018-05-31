import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../share/models/product";

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.scss']
})
export class BarNavComponent implements OnInit {

  @Input() categories: Product[];
  @Output() returnCat = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeCategory(categoryName) {
    this.returnCat.emit(categoryName);
  }
}
