import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private deliveryInfo: any;
  constructor() { }

  saveDeliveryInfo(info: any): void {
    this.deliveryInfo = info;
  }

  getDeliveryInfo(): any {
    return this.deliveryInfo;
  }
}
