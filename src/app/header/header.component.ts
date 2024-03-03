import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {SearchComponent} from "../search/search.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    SearchComponent,
    RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

}
