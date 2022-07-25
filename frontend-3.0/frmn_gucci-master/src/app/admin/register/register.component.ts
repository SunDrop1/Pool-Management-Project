import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
//import { UserService } from 'src/app/services/user.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor( private userService:UserService,private snack:MatSnackBar) { }

    public user={
      password:'',
      firstName:'',
      lastName:'',
      email:'',
      username:''
    };
  
    ngOnInit(): void {}
     reset(){
      this.user.password="";
      this.user.firstName="";
      this.user.lastName="";
      this.user.email="";
      this.user.username="";
     }
    formSubmit()
    {
        console.log(this.user);
        if(this.user.email== '' || this.user.email== null){
          //alert('User is required !!');
          this.snack.open("Email is required !! ", '', {
            duration:3000,
          }); 
          return;
        }
  
       else if(this.user.firstName== '' || this.user.firstName== null){
          //alert('User is required !!');
          this.snack.open("first name is required !! ", '', {
            duration:3000,
          }); 
          return;
        }
        else if(this.user.username== '' || this.user.username== null){
          //alert('User is required !!');
          this.snack.open("Username is required !! ", '', {
            duration:3000,
          }); 
          return;
        }
        else if(this.user.lastName== '' || this.user.lastName== null){
          //alert('User is required !!');
          this.snack.open("last name is required !! ", '', {
            duration:3000,
          }); 
          return;
        }
  
          
        else if(this.user.password== '' || this.user.password== null){
          //alert('User is required !!');
          this.snack.open("password is required !! ", '', {
            duration:3000,
          }); 
          return;
        }
          //addUser: userservice
          this.userService.addUser(this.user).subscribe(
            (data:any)=>{
              //success
              console.log(data)
             // alert("success");
             Swal.fire('Successfully done !! An email was sent for confirmation.','User id is ');
            },
            (error)=>{
              //error
              this.snack.open("Email already existed !!", '', {
               duration:3000,
             }); 
            }
          )

    }
}