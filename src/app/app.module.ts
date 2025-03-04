import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptor} from "./_helpers/http.interceptor";
import { HeaderComponent } from './header/header.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';  
import { LogoutComponent } from './logout/logout.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectFormComponent } from './components/project-form/project-form.component'; // Import MatExpansionModule
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AccessDeniedComponent,
    AdminComponent,
    LandingComponent,
    NavbarComponent,
    SideNavComponent,
    LogoutComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule 
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : HttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
