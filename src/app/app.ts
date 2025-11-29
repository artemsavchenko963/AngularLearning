import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, signal, ChangeDetectorRef, Inject } from '@angular/core';
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
import { delay, filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';
import { Data } from './services/data';
import { Random } from './services/random';
import { User } from './services/user';
import { ADMIN_TOKEN, TOKEN, USER_TOKEN } from './shared/tokens/token';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppCustomDirective, AsyncPipe, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    Data,
    {
     provide: USER_TOKEN,
     useClass: Random,
    },
    {
     provide: ADMIN_TOKEN,
     useClass: Random,
     multi: true,
    },
  ],
})

export class App {
 constructor(private dataService: Data, 
  @Inject(Data) private dataService2: Data,
  @Inject(USER_TOKEN)
   private userRandomService: Random,
  @Inject(ADMIN_TOKEN)
   private adminRandomService: Random,
 ) {
  console.log('User', this.userRandomService)
  console.log('Admin', this.adminRandomService)
 }
}



