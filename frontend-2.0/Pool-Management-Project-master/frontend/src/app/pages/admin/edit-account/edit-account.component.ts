
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { GridApi } from 'ag-grid-community';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';

interface IUserData{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  enabeled: boolean;

}
@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {


  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true,},
    {headerName:"first Name",field:"firstName" , sortable:true,filter:true},
    {headerName:"last Name",field:"lastName", sortable:true,filter:true},
    {headerName:"email",field:"email", sortable:true,filter:true},
    {headerName:"username",field:"username", sortable:true,filter:true},
    {headerName:"password",field:"password", sortable:true,filter:true},
    {headerName:"enabled",field:"enabled", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonCellRendererComponent},
  ];
    accounts=[
      {
        id: 0,
        email:'',
        enabled:true,
        firstName: '',
        lastName:'',
        password: '',
        username: ''
      },
      
    ];
    frameworkComponents = {
      btnCellRenderer: ButtonCellRendererComponent
    };
  constructor(private account:UserService) { }

  ngOnInit(): void {
    this.account.getAllusers().subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }


 
}
