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
import { filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstModule, Green, CommonModule, AppCustomDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  numObserv$: Observable<number> = new Observable((sub) => {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);
    sub.next(5);
  });

  ngOnInit() {
    this.numObserv$.subscribe(console.log);
    console.log('========================')
    of(1,2,3,4,5)
    .pipe(map(item => item * 10))
    .subscribe(console.log)

console.log('========================')
    
    from([1,2,3,4,5])
    .pipe(map(item => item * 10))
    .subscribe(console.log)

console.log('========================')

    fromEvent(document, 'click').subscribe(console.log);

console.log('========================')

    interval(1000).subscribe(console.log);
  }
}



