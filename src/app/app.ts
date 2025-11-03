import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule], // CommonModule to import all standard pipes.
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Learning Angular';

  user = {
    name: 'Artem',
    age: '27'
  }

  tooltip = 'Href to smth';

  inlineStyles = {
    width: '50%',
    background: 'green',
  }

  cssClass = 'blue';

  fifty = '50';

  someDate = new Date();
}
