import { Component, ElementRef, TemplateRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { CommonModule } from '@angular/common';
import { NgContentExample } from './component/ng-content-example/ng-content-example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, CommonModule, NgContentExample],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}


