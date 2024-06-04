import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  show = false;
  // @Output() loggedIn: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.http
      .post<any>('http://localhost:5000/api/users/login', credentials)
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.showSuccessSnackbar('Login Successful!');
          // this.loggedIn.emit();
          this.router.navigate(['/']);
        },
        (error) => {
          this.showErrorSnackbar('Invalid credentials, please try again');
        },
      );
  }

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
  onClick() {
    this.show = !this.show;
  }
  private showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success'],
    });
  }

  private showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['snackbar-error'],
    });
  }
}
