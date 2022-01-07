import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const formBuilder = new FormBuilder();

export const loginForm: FormGroup = formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
});

export const loginInputAttributes = [
  {
    type: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    type: 'password',
    placeholder: 'password',
    required: true,
    minlength: '6',
  },
];
