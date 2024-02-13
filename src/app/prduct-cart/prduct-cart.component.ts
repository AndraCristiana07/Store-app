import {Component, Input, OnInit} from '@angular/core';
import { CartService } from "../cart.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {Cart} from "../models/Cart";
@Component({
  selector: 'app-prduct-cart',
  standalone: true,
  imports: [NgForOf, CurrencyPipe],
  templateUrl: './prduct-cart.component.html',
  styleUrl: './prduct-cart.component.css'
})
export class PrductCartComponent {
  // public cartItems: any[];
  // @Input() cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  // ngOnInit(): void {
  //   this.cartItems = this.cartService.getCartItems();
  // }
  @Input() cart!: Cart;

  changeQuantity(productID: number, delta: number){
    this.cartService.changeQuantity(productID,delta);
  }

  removeFromCart(productID:number): void {
    this.cartService.removeFromCart(productID);
  }
  removeItem(productId: number): void {
    return this.cartService.removeItem(productId);
  }



}
