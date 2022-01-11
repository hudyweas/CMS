import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/models/regex.model';

import { form, attributes } from 'src/app/models/forms/login-form.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  public loginForm = form;
  public loginFormAttributes = attributes;

  public login($event) {
    this.afAuth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.router.navigateByUrl('/main-page');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          this.loginForm.controls.password.setErrors({ invalidPassword: true });
        }
        console.error;
      });
  }

  public isEmailUsed($event) {
    if (this.isItEmail(this.email.value)) {
      this.afAuth
        .fetchSignInMethodsForEmail(this.email.value)
        .then((signInMethods) => {
          if (!signInMethods.length) {
            this.loginForm.controls.email.setErrors({ emailUsed: true });
          }
        });
    }
  }

  private isItEmail(email) {
    return emailRegex.test(email) ? true : false;
  }

  private get email() {
    return this.loginForm.get('email');
  }

  private get password() {
    return this.loginForm.get('password');
  }
}
