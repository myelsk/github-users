import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public LoginSource = new BehaviorSubject<string>();

currentLogin = this.LoginSource.asObservable();

getUserInfo(searchUrl): any {
  return this.http.get(searchUrl);
}

getLogin(login: string) {
  this.LoginSource.next(login);
}

constructor(private http: HttpClient) { }
}
