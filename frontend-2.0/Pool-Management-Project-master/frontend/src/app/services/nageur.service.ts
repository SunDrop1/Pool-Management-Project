import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class NageurService {

  constructor(private _http:HttpClient) { }
  addNageur(nageur:any){
    return this._http.post(`${baseUrl}/nageur/`,nageur);
  }
}
