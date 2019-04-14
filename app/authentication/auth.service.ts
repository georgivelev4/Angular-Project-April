import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const loginUrl = 'http://localhost:9999/auth/signin';
const registerUrl = 'http://localhost:9999/auth/signup';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(formValue){
    return this.http.post(registerUrl, formValue);
  }

  login(formValue){
    return this.http.post(loginUrl, formValue);
  }

  logout(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
  isAdmin(): boolean{
    return localStorage.getItem('isAdmin') === '0'
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
