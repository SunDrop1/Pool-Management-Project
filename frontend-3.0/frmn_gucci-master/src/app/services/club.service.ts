import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ClubService {
  constructor(private _htpp: HttpClient) { }

  //create club
  createClub(club:any){
    return this._htpp.post(`${baseUrl}/club/`,club);
  }

  //get all clubs
  clubs(){
    return this._htpp.get(`${baseUrl}/club/clubs/`);
  }

  
   //update club
  updateClub(club:any){
    return this._htpp.put(`${baseUrl}/club/update_club`, club);
  }
  
 //get club by id 
  getClubById(id:any){
    return this._htpp.get(`${baseUrl}/club/${id}`);
  }
  
  //delete club
  deleteClub(id:any){
    return this._htpp.delete(`${baseUrl}/club/${id}`);
  }

}
