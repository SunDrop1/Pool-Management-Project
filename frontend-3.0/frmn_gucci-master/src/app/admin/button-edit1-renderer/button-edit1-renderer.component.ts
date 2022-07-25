import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NageurService } from 'src/app/services/nageur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-edit1-renderer',
  templateUrl: './button-edit1-renderer.component.html',
  styleUrls: ['./button-edit1-renderer.component.css']
})
export class ButtonEdit1RendererComponent implements OnInit,ICellRendererAngularComp{

  value :any;
 
 
 ngOnInit(): void {
    
  }

  constructor(private _router: Router,private _nageur:NageurService){}

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }


   // delete user
   onClickDeleteHandler(){
    Swal.fire({
      icon: 'info',
      iconColor: '#95AD8D',
      title: "Are you sure you you want to delete this competitor?",
      confirmButtonText: 'Delete',
      confirmButtonColor: '#95AD8D',
      showCancelButton: true,
      cancelButtonColor: '#AAC7A9'
    }).then((result)=>{
      if(result.isConfirmed){
        this._nageur.deletNageur(this.value).subscribe(
          (data)=>{
            Swal.fire('Sucess','Quizz deleted','success') .then(() => {
              window.location.reload();
            });
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error !!', 'Something went wrong please try again', 'error');
          }
        ); 
      }
    });
  }
 
}
