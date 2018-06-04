import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CartService} from "./service/cart.service";
import {HttpClientModule} from "@angular/common/http";
import {ForbiddenComponent} from "./component/forbidden/forbidden.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {FooterComponent} from "./component/footer/footer.component";
import {HeaderComponent} from "./component/header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {MenuModule} from "./menu/menu.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from "./menu/cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    ForbiddenComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MenuModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
