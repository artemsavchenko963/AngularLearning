import { Component, HostListener } from '@angular/core';
import { CustomDirective } from './directives/custom-directive';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { CommonModule } from '@angular/common';
import { NgContentExample } 
from 
'./component/ng-content-example/ng-content-example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, CommonModule,
  NgContentExample, CustomDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  colorProperty: string = 'transparent';
  
  setColor(newColor: string) {
    this.colorProperty = newColor
  }
}


