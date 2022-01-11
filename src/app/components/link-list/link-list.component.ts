import { Component, Input, OnInit } from '@angular/core';
import {
  footerRouterLink,
  loginRouterLink,
  registerRouterLink,
  routerDTO,
} from 'src/app/models/routers-link';

@Component({
  selector: 'cms-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {
  @Input() links: string;

  ngOnInit(): void {
    this.setRouterLinks(this.links);
  }

  public linkList: routerDTO[];

  private setRouterLinks(links) {
    switch (links) {
      case 'login':
        this.linkList = loginRouterLink;
        break;

      case 'footer':
        this.linkList = footerRouterLink;
        break;

      case 'register':
        this.linkList = registerRouterLink;
        break;

      default:
        break;
    }
  }
}
