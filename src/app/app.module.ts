import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { firebaseConfig } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import {
  JwtHelperService,
  JwtModule,
  JwtModuleOptions,
} from '@auth0/angular-jwt';

const components = [
  LoginPageComponent,
  RegisterPageComponent,
  MainPageComponent,
];

//T Brak guarda, na login pagu, jak sie zaloguje to nie powininem miec mozliwosci i tak wejscia ponowanie na login screen, a moge mimo to ;)
const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'register-page',
    component: RegisterPageComponent,
  },
  { path: 'main-page', component: MainPageComponent },

  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    allowedDomains: [''],
  },
};

@NgModule({
  declarations: [AppComponent, components],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    JwtModule,
    JwtModule.forRoot(JWT_Module_Options),
  ],
  exports: [components],
  providers: [AuthGuardService, AuthService, JwtHelperService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
