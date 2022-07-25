import { Component, OnInit,ViewChildren,QueryList,ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'

@Component({
  selector: 'app-edit-club-form1',
  templateUrl: './edit-club-form1.component.html',
  styleUrls: ['./edit-club-form1.component.css']
})

export class EditClubForm1Component implements OnInit {

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

 constructor(private _club:ClubService, private _snack:MatSnackBar, private _router:Router, private _route:ActivatedRoute) { }

 ngOnInit(): void {
  let id = parseInt(this._route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._club.getClubById(id).subscribe(
      (data:any)=>{
        this.club=data;
        console.log("data",data);
        console.log(this.club);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
 }

 addClub(){
   
   }
   clear1(){
    this.club.countries='';
    this.club.inter_region='';
    this.club.region='';
    this.club.departement='';
    this.club.code='';
    this.club.name='';
    this.club.email='';
   }
   clear2(){
    this.club.summer_club=false;
    this.club.sportive=false;
    this.club.synchro=false;
    this.club.water_polo=false;
    this.club.plongeon=false;
    this.club.eau_libre=false;
   
   }
   clear3(){  
    this.club.adresse="";
    this.club.supplement_adresse='';
    this.club.zip='';
    this.club.local='';
    this.club.telephone='';
    this.club.fax='';
   }
   formSubmit(){
    this._club.updateClub(this.club).subscribe(
      (data:any)=>{
        Swal.fire("Success !!", 'Club was updated successfully','success').then(() =>{
          this._router.navigate(['/admin/editClub']);
        });
        
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }
}
