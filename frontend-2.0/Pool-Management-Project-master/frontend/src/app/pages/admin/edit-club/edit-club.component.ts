import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
import { ButtonCellClubRendererComponent } from '../button-cell-club-renderer/button-cell-club-renderer.component';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';


@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {

  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Club's name",field:"name" , sortable:true,filter:true},
    {headerName:"Summer club",field:"summer_club", sortable:true,filter:true},
    {headerName:"Sportive",field:"sportive", sortable:true,filter:true},
    {headerName:"Synchro",field:"synchro", sortable:true,filter:true},
    {headerName:"Water-polo",field:"water_polo", sortable:true,filter:true},
    {headerName:"Plongeon",field:"plongeon", sortable:true,filter:true},
    {headerName:"Eau Libre",field:"eau_libre", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonCellClubRendererComponent},
  ];
  clubs=[
    {
      id:0,
      name:'',
      summer_club:false,
      sportive:false,
      synchro:false,
      water_polo:false,
      plongeon:false,
      eau_libre:false,
    },
    
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonCellClubRendererComponent  
  };
  constructor(private club:ClubService) { }
  ngOnInit(): void {
    this.club.clubs().subscribe(
      (data:any)=>{
        this.clubs=data;
        console.log(this.clubs);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

}
