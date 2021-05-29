import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User[];
  constructor(private http:HttpClient) { }								
  baseUrl:string = 'http://localhost:3000/users';								
             
  
  
  // Get All Users								
  getUsers() : Observable<User[]>{								
    return this.http.get<User[]>(this.baseUrl);								
  }	
}
