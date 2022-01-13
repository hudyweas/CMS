import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { firebaseConfig } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { RoutingRoutingModule } from './routing-routing.module';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { AdminPanelComponent } from './layouts/admin-panel/admin-panel.component';
import { ServicesModule } from './services/services.module';

const components = [
  LoginPageComponent,
  RegisterPageComponent,
  MainPageComponent,
  AdminPanelComponent,
];

@NgModule({
  declarations: [AppComponent, components],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RoutingRoutingModule,
    ServicesModule,
  ],
  exports: [components],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
