import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { MatButton } from '@angular/material/button';
import { CartItem } from '../models/CartItem';
@Component({
  selector: 'app-empty-cart-dialog',
  templateUrl: './empty-cart-dialog.component.html',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogTitle, MatButton],
  styleUrls: ['./empty-cart-dialog.component.css'],
})
export class EmptyCartDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EmptyCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: CartItem },
    private cartService: CartService,
  ) {}

  confirmEmptyCart(): void {
    this.cartService.removeItem(this.data.item.products.id);
    this.dialogRef.close(true); // Pass true if confirmed
  }

  cancelEmptyCart(): void {
    this.dialogRef.close(false); // Pass false if canceled
  }
}
