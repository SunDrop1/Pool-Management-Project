import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  //add user
  public addUser(user :any){
    return this.http.post(`${baseUrl}/user/`,user);
  }
 
  //get User by id 
  public getUserById(id:any){
    return this.http.get(`${baseUrl}/user/hello/${id}`);
  }
  // Get all users
  public getAllusers(){
    return this.http.get(`${baseUrl}/user/accounts/`);
  }

  //edit user
  public updateUser(user:any){
    return this.http.put(`${baseUrl}/user/update_user`,user);
  }

  //delete user
  public deletUser(id:any){
    return this.http.delete(`${baseUrl}/user/${id}`);
  }
  
}
