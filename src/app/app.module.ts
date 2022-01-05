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
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ComponentsModule } from './components/components.module';

const components = [
  LoginPageComponent,
  RegisterPageComponent,
  MainPageComponent,
];

const redirectLoggedInToMain = () => redirectLoggedInTo(['main-page']);
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['login-page']);

const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMain },
  },

  {
    path: 'register-page',
    component: RegisterPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMain },
  },

  {
    path: 'main-page',
    component: MainPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },

  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
];

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
    ComponentsModule,
  ],
  exports: [components],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
