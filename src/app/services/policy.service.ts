import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/Policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  baseUrl:string="http://localhost:3000/policy"
  constructor(private http:HttpClient) { }

  //creating new policies
  createPolicy(policy:Policy) {								
    return this.http.post(this.baseUrl, policy);								
  }	

  getpolicy():Observable<Policy[]>{
    return this.http.get<Policy[]>(this.baseUrl);
  }
  getpolicyByAccountNumber(AccountNo:number):Observable<Policy[]>
  {
    return this.http.get<Policy[]>(this.baseUrl+'?accountNumber='+AccountNo);
  }

  // getTemp(AccountNo:number)
  // {
  //   return this.http.get<Policy[]>(this.baseUrl+'?accountNumber='+AccountNo);
  // }


}
