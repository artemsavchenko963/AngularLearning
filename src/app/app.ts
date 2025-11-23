import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AppCustomDirective } from './directives/custom-directive';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { CommonModule } from '@angular/common';
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
import { filter, map, Observable } from 'rxjs';
import { it } from 'node:test';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstModule, Green, CommonModule, AppCustomDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'angular-course'

  someObserv = new Observable((sub) => {
    console.log(':)');

    sub.next('some data')
    sub.complete();

    setTimeout(() => {
      sub.next('After 2 sec')
    }, 2000)
  });

  numObserv$: Observable<number> = new Observable((sub) => {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);
    sub.next(5);
  });

  ngOnInit() {
    this.someObserv.subscribe(console.log);
    this.someObserv.subscribe(
      (value) => console.log("2 next: ", value),
      (error) => console.log("2 error: ", error),
      () => console.log('2 complete!')

    );
  
    this.someObserv.subscribe({
          next(value) {
              console.log('3 next:', value);
          },
          error(error) {
            console.log('3 Error', error);
          },
          complete() {
            console.log('3 complete!');
          }
    });

    // this.someObserv.subscribe(
    //   () => {},
    //   () => {},
    //   () => {
    //     console.log('5 Complete')
    //   },
    // )

    this.numObserv$
    .pipe(map((item) => item * 10),
    filter(item => item < 25))
    .subscribe(console.log);
  }
}



