import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {CartComponent} from "./cart.component";
import {BarNavComponent} from "./bar-nav/bar-nav.component";
import {ProductListComponent} from "./product.list/product.list.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    CartComponent,
    BarNavComponent,
    ProductListComponent
  ]
})

export class CartModule { }
