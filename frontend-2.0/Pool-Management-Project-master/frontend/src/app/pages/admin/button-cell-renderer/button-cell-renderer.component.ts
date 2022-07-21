import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellEditorAngularComp, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-cell-renderer',
  templateUrl: './button-cell-renderer.component.html',
  styleUrls: ['./button-cell-renderer.component.css']
})
export class ButtonCellRendererComponent implements OnInit,ICellRendererAngularComp {
 
  value :any;
 
 
 ngOnInit(): void {
    
  }

  constructor(private _router: Router,private _user:UserService){}

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
      title: "Are you sure you you want to delete this quiz?",
      confirmButtonText: 'Delete',
      confirmButtonColor: '#95AD8D',
      showCancelButton: true,
      cancelButtonColor: '#AAC7A9'
    }).then((result)=>{
      if(result.isConfirmed){
        this._user.deletUser(this.value).subscribe(
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
