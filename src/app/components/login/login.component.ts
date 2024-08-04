import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  logout() {
    this.authService.logout();
  }
}
