import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './link/link.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { LinkListComponent } from './link-list/link-list.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { ErrorComponent } from './error/error.component';

const components = [
  FooterComponent,
  LinkComponent,
  InputComponent,
  InputCheckboxComponent,
  LinkListComponent,
  FormHeaderComponent,
  FormButtonComponent,
  ErrorComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, BrowserModule, RouterModule],
})
export class ComponentsModule {}
