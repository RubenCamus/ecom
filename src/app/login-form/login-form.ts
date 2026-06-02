import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStrengthRequirements } from '../validators/password-requirements-validator';
import { passwordMatchValidator } from '../validators/password-match-validator';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  formData = new FormGroup(
    {
      email: new FormControl('', Validators.email),
      psw: new FormControl('', [
        Validators.required,
        passwordStrengthRequirements,
        Validators.minLength(8),
        Validators.maxLength(24),
      ]),
      pswRepeat: new FormControl('', [
        Validators.required,
        passwordStrengthRequirements,
        Validators.minLength(8),
        Validators.maxLength(24),
      ]),
    },
    { validators: [passwordMatchValidator], updateOn: 'blur' },
  );

  get psw() {
    return this.formData.get('psw');
  }
  get pswRepeat() {
    return this.formData.get('pswRepeat');
  }
  get email() {
    return this.formData.get('email');
  }

  handleSubmit() {
    alert('Email is ' + this.formData.value.email);
  }
}
