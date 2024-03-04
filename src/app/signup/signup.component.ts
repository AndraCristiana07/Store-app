import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // password;
  name: string = '';
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  show = false;

  constructor(private router: Router, private http: HttpClient,  private snackBar:MatSnackBar) {
  }
  onSubmit() {
    const userData = { name: this.name, email: this.email, password: this.password };
    this.http.post<any>('http://localhost:5000/api/users/signup', userData)
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.showSuccessSnackbar('Sign Up Successful!');
          this.router.navigate(['/login']);
        },
        (error) => {
          this.showErrorSnackbar("Sign Up Failed: " + error.error);
        }
      );
  }

  onClick() {
    this.show = !this.show;
  }
  private showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  private showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['snackbar-error']
    });
  }
  // onSubmit(){
  //   console.log("sss");
  //   this.router.navigate(['/']);
  // }


  ngOnInit() {
    this.password = 'password';
  }

  // onClick() {
  //   if (this.password === 'password') {
  //     this.password = 'text';
  //     this.show = true;
  //   } else {
  //     this.password = 'password';
  //     this.show = false;
  //   }
  // }

}
