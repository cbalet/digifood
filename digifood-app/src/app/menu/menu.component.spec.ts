import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {HeaderComponent} from "../component/header/header.component";
import {CartService} from "../service/cart.service";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        HeaderComponent
      ],
      imports:[
        HttpClientModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot()
      ],
      providers: [
        CartService,
        ToastrService
      ]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(MenuComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
