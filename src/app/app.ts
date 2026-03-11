import {Component} from '@angular/core';
import { NavBar } from "./components/navBar";

@Component({
  selector: 'app-root',
  imports: [NavBar],
  template: ` <nav-bar/> `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
