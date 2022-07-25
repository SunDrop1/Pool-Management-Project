import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public href: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }
  refresh(): void {
    window.location.reload();
}

}
