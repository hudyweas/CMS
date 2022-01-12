import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'cms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() formAttr;
  @Input() formGroup;

  public formArray: any;

  ngOnInit(): void {
    this.formArray = Object.keys(this.formGroup.controls);
  }

  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() submitEmitter: EventEmitter<string> = new EventEmitter<string>();

  inputEmit(inputValue: string) {
    this.emitter.emit(inputValue);
  }

  submitEmit(inputValue: string) {
    this.submitEmitter.emit(inputValue);
  }
}
