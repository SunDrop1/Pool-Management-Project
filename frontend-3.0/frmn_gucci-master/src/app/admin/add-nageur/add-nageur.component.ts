import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { NageurService } from 'src/app/services/nageur.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'
@Component({
  selector: 'app-add-nageur',
  templateUrl: './add-nageur.component.html',
  styleUrls: ['./add-nageur.component.css']
})
export class AddNageurComponent implements OnInit {
  countries: any = (countriesData as any).default;
 
  public nageur={
    nom:'',
    prenom:'',
    sexe:'',
    dateNaissance:'',
    code:'',
    email:'',
    civilite:'',
    nationalite:'',
    summer_nageur:false,
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
    depot:'',
    type_licence1:'',
    type_licence2:'',
    type_licence3:'',
    obliteration:'',
    maitre:false,
    dirigeant:false,
   };
   public club: any[];

  constructor(private _snack:MatSnackBar,private _nageur:NageurService, private _router:Router,private _club: ClubService) {
    this.club =[]
   }
  
  clear1(){
    this.nageur.nom='';
    this.nageur.prenom='';
    this.nageur.sexe='';
    this.nageur.lieu_naissance='';
    this.nageur.responsable='';
    this.nageur.adresse='';
    this.nageur.supplement_adresse='';
    this.nageur.zip='';
    this.nageur.local='';
    this.nageur.telephone='';
    this.nageur.fax='';
  }
  clear2(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
    this.nageur.dirigeant=false;
    this.nageur.maitre=false;
  }
  clear22(){
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
  }
  clear23(){
    this.nageur.sportive=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
  }
  clear24(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
  }
  clear25(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.eau_libre=false;
  }
  clear26(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
  }
  clear27(){
    this.nageur.maitre=false;
  }
  clear28(){
  this.nageur.dirigeant=false;
  }
  clear3(){
   this.nageur.federation='';
   this.nageur.club='';
   
   
  }
  ngOnInit(): void {
    this._club.clubs().subscribe(
      (data:any)=>{
              this.club = data;
        },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }


  formSubmit(){
    if(this.nageur.nom.trim()=='' || this.nageur.nom == null){
      this._snack.open("Nom Required !!" , '', {
        duration: 3000
      });
      return;
    }
    if(this.nageur.prenom.trim()=='' || this.nageur.prenom == null){
      this._snack.open("Prenom Required !!" , '', {
        duration: 3000
      });
      return;
    }

    if(this.nageur.dateNaissance == null){
      this._snack.open("Date naissance Required !!" , '', {
        duration: 3000
      });
      return;
    }
    if(this.nageur.club.trim()=='' || this.nageur.club == null){
      this._snack.open("Club Required !!" , '', {
        duration: 3000
      });
      return;
    }
    //all done
    this._nageur.addNageur(this.nageur).subscribe(
      (date:any)=>{
        Swal.fire("Success !!", 'nageur is added successfully','success').then(()=>{
          this._router.navigate(['/admin/filterCompetitor']);
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }

}
