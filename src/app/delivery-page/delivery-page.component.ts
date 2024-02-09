import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-delivery-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css'
})
export class DeliveryPageComponent {

}
