import { Component } from '@angular/core';
import { menuRouterLink } from 'src/app/models/routers-link';
import { FirebaseAuthService } from 'src/app/services/shared-services/firebase-auth.service';

@Component({
  selector: 'cms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private dbAuth: FirebaseAuthService) {}

  public linkList = menuRouterLink;

  public logout() {
    this.dbAuth.logOut();
  }
}
