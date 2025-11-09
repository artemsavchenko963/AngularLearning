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
color = 'blue';

}


