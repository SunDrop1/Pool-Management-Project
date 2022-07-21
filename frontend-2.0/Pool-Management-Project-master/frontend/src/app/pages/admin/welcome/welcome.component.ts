import { Component, OnInit ,ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



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
        username: 'string',
      },
      
    ];

    
    frameworkComponents = {
      btnCellRenderer: ButtonCellRendererComponent
    };
  constructor() { }

  ngOnInit(): void {
  
  }


}
