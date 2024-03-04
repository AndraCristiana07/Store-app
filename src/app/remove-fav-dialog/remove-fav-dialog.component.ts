import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { CartItem } from '../models/CartItem';
import { CartService } from '../cart.service';
import { Products } from '../models/Products';
import { FavoriteService } from '../favorite.service';
@Component({
  selector: 'app-remove-fav-dialog',
  templateUrl: './remove-fav-dialog.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
  ],
})
export class RemoveFavoriteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RemoveFavoriteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Products },
    private favoriteService: FavoriteService,
  ) {}

  confirmRemove(): void {
    this.dialogRef.close(true);
    this.favoriteService.removeFromFavorites(this.data.item);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
