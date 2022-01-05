import { Component } from '@angular/core';
import { routerDTO, routerLink } from 'src/app/models/routers-link';

@Component({
  selector: 'cms-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public links: routerDTO[] = routerLink;
}
