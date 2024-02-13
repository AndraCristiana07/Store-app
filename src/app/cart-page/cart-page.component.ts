import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";
import {PrductCartComponent} from "../prduct-cart/prduct-cart.component";
import {CartService} from "../cart.service";
import {Cart} from '../models/Cart';
import {CartItem} from '../models/CartItem';
import {CurrencyPipe} from "@angular/common";
import {CommonModule} from "@angular/common";
import {EmptyCartDialogComponent} from "../empty-cart-dialog/empty-cart-dialog.component";
@Component({
  selector: 'app-cart-page',
  // standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    PrductCartComponent,
    CurrencyPipe,
    CommonModule,

  ],
  templateUrl: './cart-page.component.html',
  standalone: true,
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  // cartItems: any[] = [];
  cart!:Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem): void {
    this.cartService.removeFromCart(cartItem.products.id);
    this.setCart();
  }



  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.products.id, quantity);
    this.setCart();
  }

  getCartTotalPrice(): number {
    return this.cartService.getCartTotalPrice();
  }

  getDeliveryFee(): number {
    return this.cartService.getDeliveryFee();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getNumberOfItems(): number {
    return this.cartService.getNumberOfItems();
  }
  emptyCart(): void {
    this.cartService.emptyCart();
  }
  removeItem(productId: number): void {
    return this.cartService.removeItem(productId);
  }
}
