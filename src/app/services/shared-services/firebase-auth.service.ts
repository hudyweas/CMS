import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DatabaseConnectorService } from './database-connector.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private dbConnector: DatabaseConnectorService
  ) {}

  public createUser(email, password) {
    this.afAuth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        this.dbConnector.saveUser(user.user);
        this.router.navigateByUrl('/login-page');
      })
      .catch((error) => {
        console.error;
      });
  }

  public getSignInMethods(email) {
    return this.afAuth.fetchSignInMethodsForEmail(email.value);
  }

  public login(email, password) {
    this.afAuth
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        this.router.navigateByUrl('/main-page');
      });
  }

  public logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
