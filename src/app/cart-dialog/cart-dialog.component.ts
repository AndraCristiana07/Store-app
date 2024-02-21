import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { CartService } from '../cart.service';
import {MatButton} from "@angular/material/button";
import {CartItem} from "../models/CartItem";
@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton
  ],
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: CartItem },
    private cartService: CartService
  ) {}

  confirmCart(): void {
    this.cartService.emptyCart();
    this.dialogRef.close(true); // Pass true if confirmed
  }

  cancelCart(): void {
    this.dialogRef.close(false); // Pass false if canceled
  }
}
