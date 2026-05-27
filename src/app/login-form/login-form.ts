import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  MinLengthValidator,
  NgModel,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { passwordStrengthRequirements } from '../validators/password-requirements-validator';
import { passwordMatchValidator } from '../validators/password-match-validator';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
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
    { validators: [passwordMatchValidator] },
  );

  handleSubmit() {
    alert('Email is ' + this.formData.value.email);
  }
}
