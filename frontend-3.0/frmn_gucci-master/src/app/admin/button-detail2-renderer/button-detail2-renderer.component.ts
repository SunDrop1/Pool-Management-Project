import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NageurService } from 'src/app/services/nageur.service';

@Component({
  selector: 'app-button-detail2-renderer',
  templateUrl: './button-detail2-renderer.component.html',
  styleUrls: ['./button-detail2-renderer.component.css']
})
export class ButtonDetail2RendererComponent implements OnInit,ICellRendererAngularComp  {

 
  value :any;
 
 
 ngOnInit(): void {
    
  }

  constructor(private _router: Router,private _nageur:NageurService){}

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
