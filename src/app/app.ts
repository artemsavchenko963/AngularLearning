import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AppCustomDirective } from './directives/custom-directive';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NgContentExample } 
from 
'./component/ng-content-example/ng-content-example';
import { Dynamic } from './component/dynamic/dynamic';
import { FirstModule } from './modules/first/first-module';
import { SecondModule } from './modules/second/second-module';
import { ComponentsModule } from "./shared/components/components-module";
import { Red } from "./shared/components/red/red";
import { Blue } from './shared/components/blue/blue';
import { Green } from "./shared/components/green/green";
import { filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';
import { prependListener } from 'node:process';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstModule, Green, CommonModule, AppCustomDirective, AsyncPipe, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  exampleObserv!: Observable<any>;
  examplePromise!: Promise<any>;

  ngOnInit() {
    // this.exampleObserv = interval(1000).pipe(map(value => value * 10));
    this.exampleObserv = interval(1000).pipe(map((value) => 
      ({
        previousValue: value - 1,
        currentValue: value,
        nextValue: value + 2,
      }))
    );

    this.examplePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise complete')
      }, 3000)
    })
  }
}



