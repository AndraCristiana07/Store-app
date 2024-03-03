import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "./models/User";
import {IUserLogin} from "./interfaces/IUserLogin";
import {HttpClient} from "@angular/common/http";
import {USER_LOGIN_URL} from "./constants/urls";
import {ToastrModule, ToastrService} from "ngx-toastr";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private tostr:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
      next: (user) =>{
        this.userSubject.next(user);
        this.tostr.success(`Welcome to app ${user.name})`),
          'Login Succesful'
      },
      error: (errorResponse) => {
        this.tostr.error(errorResponse.error, 'Login failed :(');
      }
    }));
  }
}
