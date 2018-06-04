import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./menu.component";
import {BarNavComponent} from "./bar-nav/bar-nav.component";
import {ProductListComponent} from "./product.list/product.list.component";
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    MenuComponent,
    BarNavComponent,
    ProductListComponent,
    CartComponent
  ],
  entryComponents: [
    CartComponent
  ],
})

export class MenuModule { }
