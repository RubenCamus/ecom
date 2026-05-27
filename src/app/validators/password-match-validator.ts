import { Directive } from '@angular/core';
import { Component } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const psw = control.get('psw');
  const pswRepeat = control.get('pswRepeat');
  const passwordMatch = psw?.value === pswRepeat?.value ? true : false;
  return !passwordMatch ? { passwordNotMatch: true } : null;
};
