import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class CartService {

  constructor(private http: HttpClient) {
  }

  public getCart(): Observable<any> {
    return this.http.get("./assets/cart.json");
  }

}
