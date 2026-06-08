import { Component } from '@angular/core';
import { HomePage } from './home/home';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styleUrls: ['./app.css'],
})
export class App {}
