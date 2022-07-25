import { Component, OnInit } from '@angular/core';
import{ClubService } from '../../services/club.service';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-clubs',
  templateUrl: './view-clubs.component.html',
  styleUrls: ['./view-clubs.component.css']
})
export class ViewClubsComponent implements OnInit {
  p: number = 1;
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
  constructor(private club:ClubService) { }
  ngOnInit(): void {
    this.club.clubs().subscribe(
      (data:any)=>{
        this.clubs=data;
        console.log(this.clubs);
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
