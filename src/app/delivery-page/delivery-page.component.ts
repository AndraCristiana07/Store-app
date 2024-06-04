import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {FormsModule} from "@angular/forms";
import {DeliveryService} from "../delivery.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-delivery-page',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css',
})
export class DeliveryPageComponent {
  deliveryInfo = {
    address1: '',
    address2: '',
    address3: ''
  };
  constructor(private deliveryService: DeliveryService) {
  }

  saveDeliveryInfo(): void {
    this.deliveryService.saveDeliveryInfo(this.deliveryInfo);
  }
}
