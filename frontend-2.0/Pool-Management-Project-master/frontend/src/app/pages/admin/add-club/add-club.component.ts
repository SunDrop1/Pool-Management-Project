import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../../services/countries.json' 
@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
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
 constructor(private _club:ClubService, private _snack:MatSnackBar, private _router:Router) { }

 ngOnInit(): void {
  
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
    if(this.club.name.trim()=='' || this.club.name == null){
      this._snack.open("Name Required !!" , '', {
        duration: 3000
      });
      return;
    }
    if(this.club.id == null){
      this._snack.open("Code Required !!" , '', {
        duration: 3000
      });
      return;
    }

    //all done
    this._club.createClub(this.club).subscribe(
      (date:any)=>{
        Swal.fire("Success !!", 'club is added successfully','success').then(()=>{
          this._router.navigate(['/admin/viewClub']);
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }


}
