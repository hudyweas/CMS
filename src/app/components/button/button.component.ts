import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor() {}

  @Input() type?: string = '';

  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();
}
