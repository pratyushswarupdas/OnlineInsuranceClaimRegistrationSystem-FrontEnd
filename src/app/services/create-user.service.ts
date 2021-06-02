import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }
  
  baseUrl:string = 'http://localhost:3000/users';

  createUser(user: User) {								
    return this.http.post(this.baseUrl,user);								
  }		

  getAllUser(){
    return this.http.get<User[]>(this.baseUrl);
  }
}
