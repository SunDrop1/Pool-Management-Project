import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../../services/countries.json' 
@Component({
  selector: 'app-edit-club-form',
  templateUrl: './edit-club-form.component.html',
  styleUrls: ['./edit-club-form.component.css']
})
export class EditClubFormComponent implements OnInit {

  countries: any = (countriesData as any).default;
  public club={
   pays:'',
   interRegion:'',
   region:'',
   departement:'',
   id:null,
   name:'',
   email:'',
   summerClub:false,
   sportive:false,
   synchro:false,
   waterPolo:false,
   plongeon:false,
   eauLibre:false,
   adresse:'',
   supplementAdresse:'',
   zip:'',
   local:'',
   tel:'',
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
        console.log(data);
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
     this.club.pays='';
     this.club.interRegion='';
     this.club.region='';
     this.club.departement='';
     this.club.id=null;
     this.club.name='';
     this.club.email='';


   }
   clear2(){
  this.club.summerClub=false;
  this.club.sportive=false;
  this.club.synchro=false;
  this.club.waterPolo=false;
  this.club.plongeon=false;
  this.club.eauLibre=false;
   
   }
   clear3(){  
     this.club.adresse="";
     this.club.supplementAdresse='';
     this.club.zip='';
     this.club.local='';
     this.club.tel='';
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
