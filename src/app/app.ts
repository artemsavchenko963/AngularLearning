import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CutTextPipe } from './pipes/cut-text-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CutTextPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Learning Angular';
}
