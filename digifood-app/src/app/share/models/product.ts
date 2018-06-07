export class Product{

  public id: number;
  public name: string;
  public price: number;
  public tva: number;
  private _image: string;
  public cartStock: number = 0;


  get image(): string {
    return this._image.replace(' ','%20');
  }
}
