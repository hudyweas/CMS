import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cms-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css'],
})
export class InputCheckboxComponent {
  @Input() isChecked?: boolean = false;
}
