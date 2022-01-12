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
import { FormComponent } from './form/form.component';
import { ErrorsListComponent } from './errors-list/errors-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  FooterComponent,
  LinkComponent,
  InputComponent,
  InputCheckboxComponent,
  LinkListComponent,
  FormHeaderComponent,
  FormButtonComponent,
  ErrorComponent,
  FormComponent,
  ErrorsListComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
