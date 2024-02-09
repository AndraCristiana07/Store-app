import { Injectable } from '@angular/core';
import {Cart} from "./models/Cart";
import {Products} from "./models/Products";
import { CartItem } from './models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() {}

 addToCart(products: Products): void {
    let cartItem = this.cart.items.find(item => item.products.id === products.id);
    if (cartItem) {
      this.changeQuantity(products.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(products));

 }

 removeFromCart(productID: number): void {
  this.cart.items.filter(item => item.product.id !== productID);
 }


 changeQuantity(productID: number, quantity: number): void {
  let cartItem = this.cart.items.find(item => item.product.id === productID);
  if (cartItem) {
    cartItem.quantity = quantity;
  }
 }

 getCart(): Cart {
  return this.cart;
 }

}
