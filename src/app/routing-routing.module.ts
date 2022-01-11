import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { MainPageComponent } from './main-page/main-page.component';

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
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
