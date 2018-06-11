import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class CartService {

  constructor(private http: HttpClient) {}

  /**
   * Parse the json file
   * @returns {Observable<any>}
   */
  public getCart(): Observable<any> {
    return this.http.get("./assets/cart.json");
  }

  helloWorld() {
    return 'Hello world!';
  }
}
