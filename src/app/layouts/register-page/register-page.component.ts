import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/models/regex.model';

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

  public ngOnInit(): void {}

  public registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
  });

  createUser() {
    this.afAuth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        console.log('User created');
        this.router.navigateByUrl('/login-page');
      })
      .catch((error) => {
        console.error;
      });
  }

  public isPassword: boolean = null;
  public isEmail: boolean = null;

  public isPasswordEqual() {
    if (this.password.value === this.passwordRepeat.value) {
      this.isPassword = true;
    } else {
      this.registerForm.controls['passwordRepeat'].setErrors({
        incorrect: true,
      });
      this.isPassword = false;
    }
  }

  public isEmailUsed() {
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

  public isItEmail(email) {
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordRepeat() {
    return this.registerForm.get('passwordRepeat');
  }
}
