import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./menu.component";
import {BarNavComponent} from "./bar-nav/bar-nav.component";
import {ProductListComponent} from "./product.list/product.list.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    MenuComponent,
    BarNavComponent,
    ProductListComponent
  ]
})

export class MenuModule { }
