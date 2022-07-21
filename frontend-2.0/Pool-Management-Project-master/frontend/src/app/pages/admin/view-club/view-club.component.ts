import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-clubs',
  templateUrl: './view-club.component.html',
  styleUrls: ['./view-club.component.css']

})
export class ViewClubsComponent implements OnInit {
  p: number = 1;
  clubs=[
    {
      id:0,
      name:'',
      summerClub:false,
      sportive:false,
      synchro:false,
      waterPolo:false,
      plongeon:false,
      eauLibre:false,
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