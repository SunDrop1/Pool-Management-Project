import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './admin/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { CarouselModule } from './admin/carousel/carousel.module';
import { SidebarAccountComponent } from './admin/sidebar-account/sidebar-account.component';
import { DashboardAccountComponent } from './admin/dashboard-account/dashboard-account.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { HttpClientModule } from '@angular/common/http';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { DatatestComponent } from './admin/datatest/datatest.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import { TestComponent } from './test/test.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ButtonCellRendererComponent } from './button-cell-renderer/button-cell-renderer.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { AddClubComponent } from './admin/add-club/add-club.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewClubsComponent } from './admin/view-clubs/view-clubs.component';
import { LookForClubComponent } from './admin/look-for-club/look-for-club.component';
import { ButtonDetailRendererComponent } from './admin/button-detail-renderer/button-detail-renderer.component';
import { ViewdetailformComponent } from './admin/viewdetailform/viewdetailform.component';
import { EditClubComponent } from './admin/edit-club/edit-club.component';
import { ButtonDetail1RendererComponent } from './admin/button-detail1-renderer/button-detail1-renderer.component';
import { EditClubForm1Component } from './admin/edit-club-form1/edit-club-form1.component';
import { AddNageurComponent } from './admin/add-nageur/add-nageur.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ViewNageursComponent } from './admin/view-nageurs/view-nageurs.component';
import { FilterNageursComponent } from './admin/filter-nageurs/filter-nageurs.component';
import { ButtonDetail2RendererComponent } from './admin/button-detail2-renderer/button-detail2-renderer.component';
import { NageurDetailFormComponent } from './admin/nageur-detail-form/nageur-detail-form.component';
import { EditNageurComponent } from './admin/edit-nageur/edit-nageur.component';
import { ButtonEdit1RendererComponent } from './admin/button-edit1-renderer/button-edit1-renderer.component';
import { EditNageurFormComponent } from './admin/edit-nageur-form/edit-nageur-form.component';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { LookForAccountComponent } from './admin/look-for-account/look-for-account.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomeComponent,
    SidebarAccountComponent,
    DashboardAccountComponent,
    ViewAccountComponent,
    DatatestComponent,
    TestComponent,
    EditAccountComponent,
    ButtonCellRendererComponent,
    EditAccountFormComponent,
    AddClubComponent,
    ViewClubsComponent,
    LookForClubComponent,
    ButtonDetailRendererComponent,
    ViewdetailformComponent,
    EditClubComponent,
    ButtonDetail1RendererComponent,
    EditClubForm1Component,
       AddNageurComponent,
       ViewNageursComponent,
       FilterNageursComponent,
       ButtonDetail2RendererComponent,
       NageurDetailFormComponent,
       EditNageurComponent,
       ButtonEdit1RendererComponent,
       EditNageurFormComponent,
       LookForAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    AgGridModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
 
  ],
  providers: [MatDatepickerModule, AuthInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
