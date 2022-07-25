import { Component, OnInit } from '@angular/core';
import{NageurService } from '../../services/nageur.service';
import Swal from 'sweetalert2';
import { ButtonDetail2RendererComponent } from '../button-detail2-renderer/button-detail2-renderer.component';
@Component({
  selector: 'app-filter-nageurs',
  templateUrl: './filter-nageurs.component.html',
  styleUrls: ['./filter-nageurs.component.css']
})
export class FilterNageursComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"First name",field:"nom" , sortable:true,filter:true},
    {headerName:"Last Name",field:"prenom", sortable:true,filter:true},
    {headerName:"Sexe",field:"sexe", sortable:true,filter:true},
    {headerName:"Licence",field:"licence", sortable:true,filter:true},
    {headerName:"Deposite",field:"depot", sortable:true,filter:true},
    {headerName:"Federation",field:"federation", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonDetail2RendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonDetail2RendererComponent
  };
  nageurs=[
    {
      id:0,
      nom:'',
      prenom:'',
      sexe:'',
      licence:'',
      depot:'',
      federation:''

    },
    
  ];
  constructor(private nageur:NageurService) { }

  ngOnInit(): void {
    this.nageur.getAllNageurs().subscribe(
      (data:any)=>{
        this.nageurs=data;
        console.log(this.nageurs);
        console.log("id:");
        console.log(data.id);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

}
