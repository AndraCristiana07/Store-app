import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangePassDialogComponent } from '../change-pass-dialog/change-pass-dialog.component';
import {User} from "../models/User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MatCard,
    RouterLink,
    MatCardTitle,
    CommonModule,
    MatCardContent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePassDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
