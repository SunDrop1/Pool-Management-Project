import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  
  
  loginData={
    username: '',
    password:'',
  };
  constructor(private snack:MatSnackBar, private login:LoginService , private router: Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if((this.loginData.password.trim()=='' || this.loginData.password == null)&&(this.loginData.username.trim()=='' || this.loginData.username == null)){
      this.snack.open("email and password Required !!" , '', {
        duration: 3000
      });
      return;
    }
    else if(this.loginData.username.trim()=='' || this.loginData.username == null){
      this.snack.open("email Required !!" , '', {
        duration: 3000
      });
      return;
    }
    else if(this.loginData.password.trim()=='' || this.loginData.password == null){
      this.snack.open("password Required !!" , '', {
        duration: 3000
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any) =>{
        console.log('success');
        console.log(data);

        //login...


        this.login.loginUser(data.token);

        this.login.getCurrentUser()?.subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect ... ADMIN admin-dashboard
            if(this.login.getUserRole()== "ADMIN"){
              //admin dashboard
              //window.location.href='/admin';
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);  
            }
          }
        );
      },
      (error)=>{
        console.log('Error !');
        console.log(error);
      }
    );
    
  }
  Toogle(){
    this.loginData.username="";
    this.loginData.password="";
  }

  
}

