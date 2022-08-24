import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from '../services/admin.guard';
import { NormalGuard } from '../services/normal.guard';
import { WelcomeComponent } from './admin/welcome/welcome.component';;
import { RegisterComponent } from './admin/register/register.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { EditAccountComponent } from './admin/edit-account/edit-account.component';
import { FilterUserComponent } from './admin/filter-user/filter-user.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { AddClubComponent } from './admin/add-club/add-club.component';
import { ViewClubsComponent } from './admin/view-club/view-club.component';
import { LookForClubComponent } from './admin/look-for-club/look-for-club.component';
import { EditClubComponent } from './admin/edit-club/edit-club.component';
import { EditClubFormComponent } from './admin/edit-club-form/edit-club-form.component';
import { ViewdetailformComponent } from './admin/viewdetailform/viewdetailform.component';
import { AddNageurComponent } from './admin/add-nageur/add-nageur.component';
import { FilterNageurComponent } from './admin/filter-nageur/filter-nageur.component';
import { NageurDetailFormComponent } from './admin/nageur-detail-form/nageur-detail-form.component';
import { EditNageurComponent } from './admin/edit-nageur/edit-nageur.component';
import { EditNageurFormComponent } from './admin/edit-nageur-form/edit-nageur-form.component';
import { ViewNageurComponent } from './admin/view-nageur/view-nageur.component';

const routes: Routes = [
 {
    path: 'home',
    component: HomeComponent,
    pathMatch: "full"
 },
 {
  path: 'signup',
  component: SignupComponent,
  pathMatch: "full",
 },
 {
     path: 'login',
     component: LoginComponent,
     pathMatch: "full"
 },
 {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
         path:'home',
         component: WelcomeComponent,
      },
       /*ACCOUNT*/
      {
         path:'ViewAccount',
         component: ViewAccountComponent,
      },
      {
         path:'register',
         component: RegisterComponent,
      },
      {
         path:'editAccount',
         component: EditAccountComponent,
      },
      {
         path:'filterAccount',
         component: FilterUserComponent,
      },
      {
         path:'editAccountForm/:id',
         component: EditAccountFormComponent,
      },
      /*CLUB*/
      {
         path:'addClub',
         component: AddClubComponent,
        },
        {
         path:'viewClub',
         component: ViewClubsComponent,
        },
        {
         path:'filterClub',
         component:LookForClubComponent,
        },
        {
         path:'editClub',
         component:EditClubComponent,
        },
        {
         path:'editClubForm/:id',
         component:EditClubFormComponent,
        },
        {
         path:'ClubDetails/:id',
         component:ViewdetailformComponent,
        },
        {
         path:'addCompetitor',
         component: AddNageurComponent,
        },
        {
         path:'viewCompetitor',
         component: ViewNageurComponent,
        },
        {
         path:'filterCompetitor',
         component:FilterNageurComponent,
        },
        {
         path:'CompetitorDetails',
         component:NageurDetailFormComponent,
        },
        {
         path:'editCompetitor',
         component:EditNageurComponent,
        },
        {
         path:'editCompetitorForm',
         component:EditNageurFormComponent,
        },
      
    ],
 }, 

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  
})
export class AppRoutingModule { }
