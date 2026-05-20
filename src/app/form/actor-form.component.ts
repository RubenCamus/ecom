import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Actor } from './actor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  imports: [FormsModule, JsonPipe],
})
export class ActormFormComponent {
  model = new Actor(2, 'Pepe');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
