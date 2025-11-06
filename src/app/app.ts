import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
color = 'green';
parentName: string = 'Hello!';

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('e', target.value);
  }

  setNewName(newName: string) {
    this.parentName = newName;
  }
}

