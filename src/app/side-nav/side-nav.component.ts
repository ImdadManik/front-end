
import { Component, OnDestroy} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';
 

@Component({
  selector: 'app-sidenav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent  {
  constructor(private authService : AuthService) {
  }
  showAdminBoard = false;
  AuthUserSub! : Subscription;
  ngOnInit(): void {
   this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next : user => {
        if(user) {
          this.showAdminBoard = user.role.name === 'ROLE_ADMIN';
        }
      }
    })
  } 
}

 