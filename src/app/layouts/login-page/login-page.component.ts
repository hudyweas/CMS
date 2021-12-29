import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  isChecked: boolean = true;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  isEmail = null;
  invalidPassword = null;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    psswd: ['', [Validators.required, Validators.minLength(6)]],
    psswdRepeat: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    this.afAuth
      .signInWithEmailAndPassword(this.email.value, this.psswd.value)
      .then(() => {
        console.log('User signed in');
        this.router.navigateByUrl('/main-page');
      })
      .catch((error) => {
        if (error.code == 'auth/wrong-password') {
          this.invalidPassword = true;
        }
        console.log('Something went wrong: ', error.message);
      });
  }

  isEmailUsed() {
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

  isItEmail(email) {
    const re = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get psswd() {
    return this.loginForm.get('psswd');
  }

  get psswdRepeat() {
    return this.loginForm.get('psswdRepeat');
  }
}
