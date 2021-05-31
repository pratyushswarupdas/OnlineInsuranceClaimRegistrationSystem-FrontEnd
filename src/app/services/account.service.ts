import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl:string="http://localhost:3000/account"
  constructor(private http:HttpClient) { }

  getAccountByUserName(username:string|null): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl+'?username='+username);								
  }	
  getAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl);								
    }
}
