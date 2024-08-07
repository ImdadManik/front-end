import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}
  showAdminBoard = false;
  AuthUserSub!: Subscription;
  handleLogout() {
    this.authService.logout();
  }
}
