import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CutTextPipe } from './pipes/cut-text-pipe';
import { SortDataPipe } from './pipes/sort-data-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  color = 'green';
  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('e', target.value);
  }
}
