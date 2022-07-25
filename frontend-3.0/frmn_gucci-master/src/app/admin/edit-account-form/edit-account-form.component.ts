import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-account-form',
  templateUrl: './edit-account-form.component.html',
  styleUrls: ['./edit-account-form.component.css']
})
export class EditAccountFormComponent implements OnInit {

  constructor(private snack:MatSnackBar,private _user:UserService,private route:ActivatedRoute,private _router:Router) { }
  public user={
    id : 1,
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
  };
  id:any
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._user.getUserById(id).subscribe(
      (data:any)=>{
        this.user=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }
  
   
  onSubmit(){
    this._user.updateUser(this.user).subscribe(
      (data:any)=>{
        Swal.fire("Success !!", 'User was updated successfully','success').then(() =>{
          this._router.navigate(['/admin/editAccount']);
        });
        
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }
 
}
