import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'
@Component({
  selector: 'app-viewdetailform',
  templateUrl: './viewdetailform.component.html',
  styleUrls: ['./viewdetailform.component.css']
})
export class ViewdetailformComponent implements OnInit {
  
  countries: any = (countriesData as any).default;
  public club={
    countries:'',
    inter_region:'',
    region:'',
    departement:'',
    code:'',
    name:'',
    email:'',
    summer_club:false,
    sportive:false,
    synchro:false,
    water_polo:false,
    plongeon:false,
    eau_libre:false,
    adresse:'',
    supplement_adresse:'',
    zip:'',
    local:'',
    telephone:'',
    fax:'',
    
   };
  id:any


  constructor(private _club:ClubService, private _snack:MatSnackBar, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._club.getClubById(id).subscribe(
      (data:any)=>{
        this.club=data;
        console.log(data);
        console.log(this.club);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }
}
