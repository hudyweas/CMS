import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cms-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css'],
})
export class FormButtonComponent {
  @Input() form: FormGroup;
}
