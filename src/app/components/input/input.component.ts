import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'cms-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder?: string = '';
  @Input() pattern?: string = '*';
  @Input() controlName? = '';
  @Input() id? = '';

  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  valueEmit(inputValue: string) {
    this.emitter.emit(inputValue);
  }
}
