import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user =  {
    "id": 3,
    "username": "sweetpotato",
    "password": "batata123",
    "firstName": "batata",
    "lastName": "hilwa",
    "email": "batata@gmail.com",
    "phone": null,
    "profile": "test.jpg",
    "enabled": true,
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "authorities": [
        {
            "authority": "NORMAL"
        }
    ],
    "accountNonLocked": true
}
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    //this.user = this.login.getUser();
    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.user= user;
      },
      (error)=>{
        alert('error');
      }
    )
  }

}
