import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './models/User';
import { IUserLogin } from './interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_URL } from './constants/urls';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;
  constructor(
    private http: HttpClient,
  ) {
    this.userObservable = this.userSubject.asObservable();
  }


  getUser(): Observable<User> {
    return this.http.get<User>(USER_URL);
  }

  getUserPassword(): Observable<any> {
    return this.http.get<any>(`${USER_URL}password`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(USER_URL, user);
  }
  // updateUserPassword(password: string): Observable<User> {
  //   return this.http.put<User>(`${USER_URL}password`, password);
  // }
  updateUserPassword(email: string, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${USER_URL}change-password`, { email, currentPassword, newPassword });
  }

  getUserMail(): Observable<any> {
    return this.http.get<any>(`${USER_URL}email`);
  }


  // changePassword(currentPassword: string, newPassword: string): Observable<any> {
  //   const email = localStorage.getItem('email');

  //   const requestBody = {
  //     email: email,
  //     currentPassword: currentPassword,
  //     newPassword: newPassword
  //   };

  //   return this.http.post<any>(`${USER_URL}change-password`, requestBody);
  // }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          // this.tostr.success(`Welcome to app ${user.name})`), 'Login Succesful';
        },
        error: (errorResponse) => {
          // this.tostr.error(errorResponse.error, 'Login failed :(');
        },
      }),
    );
  }
}
