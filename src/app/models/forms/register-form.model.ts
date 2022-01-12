import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const formBuilder = new FormBuilder();

export const form: FormGroup = formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
});

export const attributes = {
  formHeader: { content: 'register' },
  formButton: { content: 'register' },
  email: {
    type: 'email',
    placeholder: 'Email',
  },
  password: {
    type: 'password',
    placeholder: 'password',
  },
  passwordRepeat: {
    type: 'password',
    placeholder: 'repeat password',
  },
};
