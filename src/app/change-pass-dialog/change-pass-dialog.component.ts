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
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-change-pass-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    NgIf,
  ],
  templateUrl: './change-pass-dialog.component.html',
  styleUrl: './change-pass-dialog.component.css',
})
export class ChangePassDialogComponent {
  oldpassword: string | undefined;
  newpassword: string | undefined;
  show1 = false;
  show2 = false;

  ngOnInit() {
    this.oldpassword = 'password';
    this.newpassword = 'password';
  }

  onClick() {
    if (this.oldpassword === 'password') {
      this.oldpassword = 'text';
      this.show1 = true;
    } else {
      this.oldpassword = 'password';
      this.show1 = false;
    }
    if (this.newpassword === 'password') {
      this.newpassword = 'text';
      this.show2 = true;
    } else {
      this.newpassword = 'password';
      this.show2 = false;
    }
  }
  constructor(
    public dialogRef: MatDialogRef<ChangePassDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { item: CartItem },
    private cartService: CartService,
  ) {}

  confirmPass(): void {
    // this.cartService.emptyCart();
    this.dialogRef.close(true); // Pass true if confirmed
  }

  cancelPass(): void {
    this.dialogRef.close(false); // Pass false if canceled
  }
}
