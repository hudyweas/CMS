import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input() formGroup: FormGroup;
  @Input() inputAtrr: [];

  public formArray: FormArray;

  ngOnInit(): void {
    this.formArray = this.formBuilder.array([this.formGroup]);
    console.log(this.formArray);
  }
}
