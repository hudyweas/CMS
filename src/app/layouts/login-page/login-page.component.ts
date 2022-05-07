import { Component } from '@angular/core';
import { emailRegex } from 'src/app/models/regex.model';
import { form, attributes } from 'src/app/models/forms/login-form.model';
import { FirebaseAuthService } from 'src/app/services/shared-services/firebase-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private fbAuth: FirebaseAuthService) {}

  public loginForm = form;
  public loginFormAttributes = attributes;

  public login($event) {
    try {
      this.fbAuth.login(this.email, this.password);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        this.loginForm.controls.password.setErrors({ invalidPassword: true });
      }
      console.error;
    }
  }

  public isEmailUsed($event) {
    if (this.isItEmail(this.email.value)) {
      this.fbAuth.getSignInMethods(this.email).then((signInMethods) => {
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
