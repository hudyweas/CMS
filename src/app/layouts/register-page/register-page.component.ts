import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { attributes, form } from 'src/app/models/forms/register-form.model';
import { emailRegex } from 'src/app/models/regex.model';
import { DatabaseConnectorService } from 'src/app/services/shared-services/database-connector.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private dbConnector: DatabaseConnectorService
  ) {}

  public registerForm = form;
  public registerFormAttributes = attributes;

  public createUser($event) {
    this.afAuth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.router.navigateByUrl('/login-page');
      })
      .catch((error) => {
        console.error;
      });
  }

  private isPasswordEqual() {
    if (this.password.value === this.passwordRepeat.value) {
    } else {
      this.registerForm.controls['passwordRepeat'].setErrors({
        equalPasswords: true,
      });
    }
  }

  private isEmailUsed() {
    if (this.isItEmail(this.email.value)) {
      this.afAuth
        .fetchSignInMethodsForEmail(this.email.value)
        .then((signInMethods) => {
          if (signInMethods.length) {
            this.registerForm.controls.email.setErrors({
              emailUsedForRegistration: true,
            });
          }
        });
    }
  }

  public serviceChange($event) {
    switch ($event.target.type) {
      case 'email':
        this.isEmailUsed();
        break;

      case 'password':
        this.isPasswordEqual();
        break;

      case 'passwordRepeat':
        this.isPasswordEqual();
        break;

      default:
        break;
    }
  }

  private isItEmail(email) {
    return emailRegex.test(email) ? true : false;
  }

  private get email() {
    return this.registerForm.get('email');
  }

  private get password() {
    return this.registerForm.get('password');
  }

  private get passwordRepeat() {
    return this.registerForm.get('passwordRepeat');
  }
}
