import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }
  baseUrl:string = 'http://localhost:3000/claim';	
  
  createClaim(claim:Claim){
    return this.http.post(this.baseUrl,claim);
  }

  getReportByPolicyNumber(policyNumber: number):Observable<Claim[]>{
    return this.http.get<Claim[]>(this.baseUrl+'?policyNumber='+policyNumber);
 }

 getClaimDetails(){
   return this.http.get(this.baseUrl);
 }

}
