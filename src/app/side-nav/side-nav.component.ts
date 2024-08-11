import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';

         
const roleList = [
  'ROLE_ADMIN','ROLE_VIEWER','ROLE_EDITOR','ROLE_MANAGER'
]

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  showAdminBoard = false;
  isProjectsOpen = false;
  AuthUserSub!: Subscription;

   
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next: user => {
        if (user) {
          //this.showAdminBoard = user.role.name.includes(['ROLE_ADMIN']);
          debugger
          this.showAdminBoard = roleList.includes(user.role.name); 
        }
      }
    });
  }

  toggleProjects(): void {
    this.isProjectsOpen = !this.isProjectsOpen;
  }

  ngOnDestroy(): void {
    if (this.AuthUserSub) {
      this.AuthUserSub.unsubscribe();
    }
  }
}
