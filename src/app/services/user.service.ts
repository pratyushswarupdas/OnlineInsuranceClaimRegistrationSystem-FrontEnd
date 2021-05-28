import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }								
  baseUrl:string = 'http://localhost:3000/users';								
                
  // Get All Users								
  getUsers(){								
    return this.http.get<User[]>(this.baseUrl);								
  }	
}
