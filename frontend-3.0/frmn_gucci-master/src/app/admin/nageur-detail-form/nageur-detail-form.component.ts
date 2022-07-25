import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NageurService } from 'src/app/services/nageur.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'
@Component({
  selector: 'app-nageur-detail-form',
  templateUrl: './nageur-detail-form.component.html',
  styleUrls: ['./nageur-detail-form.component.css']
})
export class NageurDetailFormComponent implements OnInit {
  countries: any = (countriesData as any).default;
  id:any
  public nageur={
   nom:'',
   prenom:'',
   sexe:'',
   date_naissance:'',
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
   lieu_naissance:'',
   responsable:'',
   federation:'',
   club:'',
   type_licence1:'',
   type_licence2:'',
   type_licence3:'',
   maitre:false,
   dirigeant:false,
  };
  constructor(private _nageur:NageurService, private _snack:MatSnackBar, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._nageur.getNageurById(id).subscribe(
      (data:any)=>{
        this.nageur=data;
        console.log(data);
        console.log(this.nageur);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

}
