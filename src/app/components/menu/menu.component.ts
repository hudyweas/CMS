import { Component } from '@angular/core';
import { menuRouterLink } from 'src/app/models/routers-link';

@Component({
  selector: 'cms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public linkList = menuRouterLink;
}
