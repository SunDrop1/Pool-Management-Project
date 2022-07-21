import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../../services/countries.json' 
@Component({
  selector: 'app-viewdetailform',
  templateUrl: './viewdetailform.component.html',
  styleUrls: ['./viewdetailform.component.css']
})
export class ViewdetailformComponent implements OnInit {


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
