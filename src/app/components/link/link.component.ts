import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent {
  @Input() urlLink: string = '';
  @Input() subClass?: string = '';
}
