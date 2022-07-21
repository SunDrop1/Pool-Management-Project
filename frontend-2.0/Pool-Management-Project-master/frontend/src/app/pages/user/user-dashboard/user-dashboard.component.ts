import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  catId=0;
  categories=[
    {
      cid:0,
      title:'',
      description: ''
    }
  ];

  constructor(private _cat:CategoryService, private _snack: MatSnackBar) {
      
   }

  ngOnInit(): void {
      this._cat.categories().subscribe((data:any) =>{
          this.categories=data;
      },
      (error)=>{
          this._snack.open("Error in loading categories from server",'',{
            duration: 3000,
          });
      });
  }

}
