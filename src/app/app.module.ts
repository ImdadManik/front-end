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
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule
 


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
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
    MatTableModule,  
    MatNativeDateModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,  
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : HttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
