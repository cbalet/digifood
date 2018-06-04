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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ToastNoAnimation, ToastNoAnimationModule, ToastrModule} from "ngx-toastr";
import {MenuComponent} from "./menu/menu.component";
import {CartComponent} from "./menu/cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    ForbiddenComponent,
    NotFoundComponent,
    FooterComponent,
    CartComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
    ToastNoAnimationModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    CartComponent
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
