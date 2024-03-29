import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './pages/app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { RegisterComponent } from './pages/admin/register/register.component';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewAccountComponent } from './pages/admin/view-account/view-account.component';
import { LookForAccountComponent } from './pages/admin/look-for-account/look-for-account.component';
import { EditAccountComponent } from './pages/admin/edit-account/edit-account.component';
import { ButtonCellRendererComponent } from './pages/admin/button-cell-renderer/button-cell-renderer.component';
import { FilterUserComponent } from './pages/admin/filter-user/filter-user.component';
import { EditAccountFormComponent } from './pages/admin/edit-account-form/edit-account-form.component';
import { AddClubComponent } from './pages/admin/add-club/add-club.component';
import { EditClubComponent } from './pages/admin/edit-club/edit-club.component';
import { EditClubFormComponent } from './pages/admin/edit-club-form/edit-club-form.component';
import { LookForClubComponent } from './pages/admin/look-for-club/look-for-club.component';
import { ViewClubsComponent } from './pages/admin/view-club/view-club.component';
import { ButtonDetailRendererComponent } from './pages/admin/button-detail-renderer/button-detail-renderer.component';
import { ViewdetailformComponent } from './pages/admin/viewdetailform/viewdetailform.component';
import { ButtonCellClubRendererComponent } from './pages/admin/button-cell-club-renderer/button-cell-club-renderer.component';
import { CarouselComponent } from './pages/admin/carousel/carousel.component';
import { AddNageurComponent } from './pages/admin/add-nageur/add-nageur.component';
import { EditNageurFormComponent } from './pages/admin/edit-nageur-form/edit-nageur-form.component';
import { EditNageurComponent } from './pages/admin/edit-nageur/edit-nageur.component';
import { FilterNageurComponent } from './pages/admin/filter-nageur/filter-nageur.component';
import { NageurDetailFormComponent } from './pages/admin/nageur-detail-form/nageur-detail-form.component';
import { ViewNageurComponent } from './pages/admin/view-nageur/view-nageur.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    RegisterComponent,
    ViewAccountComponent,
    LookForAccountComponent,
    EditAccountComponent,
    ButtonCellRendererComponent,
    FilterUserComponent,
    EditAccountFormComponent,
    AddClubComponent,
    EditClubComponent,
    EditClubFormComponent,
    LookForClubComponent,
    ViewClubsComponent,
    ButtonDetailRendererComponent,
    ViewdetailformComponent,
    ButtonCellClubRendererComponent,
    CarouselComponent,
    AddNageurComponent,
    EditNageurFormComponent,
    EditNageurComponent,
    FilterNageurComponent,
    NageurDetailFormComponent,
    ViewNageurComponent,
 
    
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    AgGridModule,
    NgxUiLoaderModule,
    MatTabsModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
