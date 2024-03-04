import { CartItem } from './CartItem';
import { Products } from './Products';

export class Cart {
  items: any[] = [];
  // items: Products[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
