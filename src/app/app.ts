import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CutTextPipe } from './pipes/cut-text-pipe';
import { SortDataPipe } from './pipes/sort-data-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CutTextPipe, SortDataPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Learning Angular';
  ageOfUsers = [{age: 18},{age: 13},{age: 20}]

  constructor() {
    setTimeout(() => {
      this.ageOfUsers = [...this.ageOfUsers, {age: 16}];
      console.log(this.ageOfUsers)
    }, 2000);
    setTimeout(() => {
      this.ageOfUsers = [...this.ageOfUsers, {age: 35}];
    }, 2000);

  }
}
