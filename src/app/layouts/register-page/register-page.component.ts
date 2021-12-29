import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    psswd: ['', [Validators.required, Validators.minLength(6)]],
    psswdRepeat: ['', [Validators.required, Validators.minLength(6)]],
  });

  createUser() {
    this.afAuth
      .createUserWithEmailAndPassword(this.email.value, this.psswd.value)
      .then(() => {
        console.log('User created');
        this.router.navigateByUrl('/main-page');
      })
      .catch((error) => {
        console.log('Something went wrong: ', error.message);
      });
  }

  isPassword = null;
  isEmail = null;

  isPasswordEqual() {
    if (this.psswd.value == this.psswdRepeat.value) {
      this.isPassword = true;
    } else {
      this.registerForm.controls['psswdRepeat'].setErrors({ incorrect: true });
      this.isPassword = false;
    }
  }

  isEmailUsed() {
    if (this.isItEmail(this.email.value)) {
      this.afAuth
        .fetchSignInMethodsForEmail(this.email.value)
        .then((signInMethods) => {
          if (signInMethods.length) {
            this.isEmail = true;
            this.registerForm.controls['email'].setErrors({ incorrect: true });
          } else {
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
    return this.registerForm.get('email');
  }

  get psswd() {
    return this.registerForm.get('psswd');
  }

  get psswdRepeat() {
    return this.registerForm.get('psswdRepeat');
  }
}
