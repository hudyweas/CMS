import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/models/regex.model';
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public isChecked: boolean = true;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public isEmail: boolean = null;
  public invalidPassword: boolean = null;

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public login() {
    this.afAuth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        return this.afAuth.currentUser;
      })
      .then((user) => {
        const jwtBearerToken = jwt.sign(
          {
            id: user.uid,
          },
          'secret',
          { expiresIn: '1h' }
        );

        localStorage.setItem('id_token', jwtBearerToken);
        this.router.navigateByUrl('/main-page');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') this.invalidPassword = true;
        console.error;
      });
  }

  public isEmailUsed() {
    if (this.isItEmail(this.email.value)) {
      this.afAuth
        .fetchSignInMethodsForEmail(this.email.value)
        .then((signInMethods) => {
          if (signInMethods.length) {
            this.isEmail = true;
          } else {
            this.loginForm.controls['email'].setErrors({ incorrect: true });
            this.isEmail = false;
          }
        });
    }
    this.isEmail = null;
  }

  public isItEmail(email) {
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  public log() {}
}
