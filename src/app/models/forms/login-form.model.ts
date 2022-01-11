import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const formBuilder = new FormBuilder();

export const form: FormGroup = formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
});

export const attributes = {
  formHeader: { content: 'sign in' },
  formButton: { content: 'sign in' },
  email: {
    type: 'email',
    placeholder: 'Email',
    change: '',
  },
  password: {
    type: 'password',
    placeholder: 'password',
  },
};
