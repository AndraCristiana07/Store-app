import { Products } from './Products';

export class CartItem {
  constructor(products: Products) {
    this.products = products;
    // this.price;
  }
  products: Products;
  quantity: number = 1;

  get price(): number {
    return this.products.price;
  }
  getQuantity(): number {
    return this.quantity;
  }
}
