import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-empty-cart-dialog',
  templateUrl: './empty-cart-dialog.component.html',
  standalone: true,
  styleUrls: ['./empty-cart-dialog.component.css']
})
export class EmptyCartDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EmptyCartDialogComponent>,
    private cartService: CartService
  ) {}

  confirmEmptyCart(): void {
    this.cartService.emptyCart();
    this.dialogRef.close(true); // Pass true if confirmed
  }

  cancelEmptyCart(): void {
    this.dialogRef.close(false); // Pass false if canceled
  }
}
