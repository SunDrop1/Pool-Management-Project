import { Component, OnInit } from '@angular/core';
import{NageurService } from '../../services/nageur.service';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-nageurs',
  templateUrl: './view-nageurs.component.html',
  styleUrls: ['./view-nageurs.component.css']
})
export class ViewNageursComponent implements OnInit {
  p: number = 1;
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
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

}
