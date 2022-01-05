import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './link/link.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

const components = [FooterComponent, LinkComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, BrowserModule, RouterModule],
})
export class ComponentsModule {}
