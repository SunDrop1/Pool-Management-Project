import { Component, OnInit } from '@angular/core';
import{AccountsService } from '../services/accounts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"first Name",field:"firstName" , sortable:true,filter:true},
    {headerName:"last Name",field:"lastName", sortable:true,filter:true},
    {headerName:"email",field:"email", sortable:true,filter:true},
    {headerName:"username",field:"username", sortable:true,filter:true},
    {headerName:"password",field:"password", sortable:true,filter:true},
    {headerName:"enabled",field:"enabled", sortable:true,filter:true},
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
  
  constructor(private account:AccountsService) { }

  ngOnInit(): void {
    this.account.accounts().subscribe(
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
