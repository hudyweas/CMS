import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cms-errors-list',
  templateUrl: './errors-list.component.html',
  styleUrls: ['./errors-list.component.css'],
})
export class ErrorsListComponent {
  @Input() field: FormControl;

  @Input() isEmail?: boolean = true;
  @Input() invalidPassword?: boolean = false;
}
