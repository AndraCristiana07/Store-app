import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // password;
  password: string | undefined;
  show = false;

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.password = 'password';
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onSubmit(){
    console.log("sss");
    this.router.navigate(['/']);
  }
}
