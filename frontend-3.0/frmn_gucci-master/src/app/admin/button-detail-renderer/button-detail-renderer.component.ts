import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-button-detail-renderer',
  templateUrl: './button-detail-renderer.component.html',
  styleUrls: ['./button-detail-renderer.component.css']
})
export class ButtonDetailRendererComponent implements OnInit,ICellRendererAngularComp {

  value :any;
 
 
 ngOnInit(): void {
    
  }

  constructor(private _router: Router,private _club:ClubService){}

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }
  // delete user
  onClickDeleteHandler(){
    
  }

}
