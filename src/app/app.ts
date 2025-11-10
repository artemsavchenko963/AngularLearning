import { Component, ChangeDetectorRef } from '@angular/core';
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
  title: string = 'title!@#';
  name: string = 'Имя';
  toggler: boolean = true;
  obj = { age: 12 };

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.title = "another title";
      this.cdr.detectChanges(); 
    }, 3000);
  }
}


