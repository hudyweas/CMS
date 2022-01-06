import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'cms-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder?: string = '';
  @Input() required?: boolean = false;
  @Input() minlength?: string = '0';
  @Input() pattern?: string = '*';

  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  valueEmit(inputValue: string) {
    this.emitter.emit(inputValue);
  }
}
