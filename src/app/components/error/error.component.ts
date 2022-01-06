import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  @Input() condition: boolean;
}
