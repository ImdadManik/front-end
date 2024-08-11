import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private authService: AuthService, private storageService: StorageService) {}
  showAdminBoard = false;
  AuthUserSub!: Subscription;
  handleLogout() {
    this.authService.logout();
    this.storageService.clean();
  }
}
