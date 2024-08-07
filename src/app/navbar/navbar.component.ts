import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {  
  constructor(private router: Router, private authService : AuthService) {}

  isLogIn = false;
  AuthUserSub! : Subscription;
  ngOnInit(): void {
   this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next : user => {
        if(user) {
          this.isLogIn = user.role.name === 'ROLE_ADMIN';
        }
      }
    })
  }

  Logout(){
    this.authService.logout();
    this.isLogIn = false;  
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  
  }
}
