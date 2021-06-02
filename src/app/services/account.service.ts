import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl:string="http://localhost:3000/account"
  constructor(private http:HttpClient) { }

  getAccountByUserName(username:string|null): Observable<account[]>{
    return this.http.get<account[]>(this.baseUrl+'?username='+username);								
  }	
  getAccounts(): Observable<account[]>{
    return this.http.get<account[]>(this.baseUrl);								
    }
  // Create Account								
  createAccount(account: account) {								
    return this.http.post(this.baseUrl, account);								
  }	
}
