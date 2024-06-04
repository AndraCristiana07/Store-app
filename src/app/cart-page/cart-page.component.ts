import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { PrductCartComponent } from '../prduct-cart/prduct-cart.component';
import { CartService } from '../cart.service';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { EmptyCartDialogComponent } from '../empty-cart-dialog/empty-cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {DeliveryService} from "../delivery.service";

// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cart-page',
  imports: [
    HeaderComponent,
    RouterLink,
    PrductCartComponent,
    CurrencyPipe,
    CommonModule,
  ],
  templateUrl: './cart-page.component.html',
  standalone: true,
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  // cartItems: any[] = [];
  deliveryInfo: any;
  cart!: Cart;
  constructor(
    private cartService: CartService,
    public dialog: MatDialog,
    private deliveryService:DeliveryService
  ) {
    this.setCart();
    this.deliveryInfo = this.deliveryService.getDeliveryInfo();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      // data: { item: item }
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
      // this.removeItem(item.products.id);
    });
  }
  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.products.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
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

 genPDF() {
   const printableContent = document.querySelector('.printable');

   html2canvas(<HTMLElement>printableContent).then(canvas => {
     const contentDataURL = canvas.toDataURL('image/png');
     const pdf = new jsPDF('p', 'mm', 'a4');
     const imgWidth = 210;
     const pageHeight = 295;
     const imgHeight = canvas.height * imgWidth / canvas.width;
     let position = 0;

     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
     pdf.save('cart_summary.pdf');
   });
 }
}
