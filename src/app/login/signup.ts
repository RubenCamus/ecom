import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginForm } from '../login-form/login-form';

@Component({
  selector: 'signup',
  template: `<app-login-form />`,
  imports: [RouterLink, LoginForm],
})
export class SignUp {}
