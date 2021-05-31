import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/Policy';
import { User } from '../models/User';

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


}
