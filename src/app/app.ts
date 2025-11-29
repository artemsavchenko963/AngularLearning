import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, signal, ChangeDetectorRef } from '@angular/core';
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
import { delay, filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';
import { Data } from './services/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppCustomDirective, AsyncPipe, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [Data],
})

// export class App {
//   users: any;
//   constructor(private dataService: Data) {
//     console.log(this.dataService.getData());

//     this.dataService.getUsers().subscribe((users) => {
//       console.log(users);
//       this.users = users;
//     })
//   }
// }

export class App {
 users$: Observable<any>;

 constructor(private dataService: Data) {
  this.users$ = this.dataService.getUsers();
 }
}



