import { Component, Inject } from '@angular/core';
import {UserService} from "../user.service";
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
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-change-pass-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    NgIf,
    FormsModule,
  ],
  templateUrl: './change-pass-dialog.component.html',
  styleUrl: './change-pass-dialog.component.css',
})
export class ChangePassDialogComponent {
  currentPassword: string = '';
  newPassword: string = '';
  show = false;

  ngOnInit() {
    this.currentPassword = 'password';
    this.newPassword = 'password';
  }

  onClick1() {
    if (this.currentPassword === 'password') {
      this.currentPassword = 'text';
      this.show = true;
    } else {
      this.currentPassword = 'password';
      this.show = false;
    }
  }
  onClick2(){
    if (this.newPassword === 'password') {
      this.newPassword = 'text';
      this.show = true;
    } else {
      this.newPassword = 'password';
      this.show = false;
    }
  }
  constructor(
    public dialogRef: MatDialogRef<ChangePassDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { item: CartItem },
    private cartService: CartService,
    private userService: UserService
  ) {}

  confirmPass(): void {
    // this.cartService.emptyCart();
    this.dialogRef.close(true);
  }

  cancelPass(): void {
    this.dialogRef.close(false);
  }

  changePassword(): void {
    this.userService.getUserMail().subscribe(email => {
      this.userService.updateUserPassword(email, this.currentPassword, this.newPassword)
        .subscribe(response => {
          console.log('Password changed successfully:', response);
        }, error => {
          console.error('Error changing password:', error);
        });
    }, error => {
      console.error('Error getting user email:', error);
    });
  }

}
