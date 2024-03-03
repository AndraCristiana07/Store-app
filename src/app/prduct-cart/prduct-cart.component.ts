import {Component, Input, OnInit} from '@angular/core';
import { CartService } from "../cart.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {Cart} from "../models/Cart";
import {MatDialog} from "@angular/material/dialog";
import {EmptyCartDialogComponent} from "../empty-cart-dialog/empty-cart-dialog.component";
import {CartItem} from "../models/CartItem";
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

  constructor(private cartService: CartService, public dialog: MatDialog) {}

  // ngOnInit(): void {
  //   this.cartItems = this.cartService.getCartItems();
  // }
  @Input() cart!: Cart;

  changeQuantity(productID: number, delta: number){
    this.cartService.changeQuantity(productID,delta);
  }

  openDialog(item : CartItem): void {
    const originalQuantity = item.quantity;
    const dialogRef = this.dialog.open(EmptyCartDialogComponent, {
      data: { item: item }
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      // this.removeItem(item.products.id);
    });
  }
  removeFromCart(productID:number): void {
    this.cartService.removeFromCart(productID);
  }
  removeItem(productId: number): void {
    return this.cartService.removeItem(productId);
  }



}
