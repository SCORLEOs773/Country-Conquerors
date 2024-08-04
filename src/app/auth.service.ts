import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.afAuth.currentUser; // Checks if there is a current user
  }

  googleLogin() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Google login error: ', error);
      });
  }

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
  }

  // Optional: Get the currently logged-in user
  getUser() {
    return this.afAuth.user;
  }
}
