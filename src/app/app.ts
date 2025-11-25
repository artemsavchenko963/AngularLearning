import { Component, ViewChild, ViewContainerRef, signal, ChangeDetectorRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FirstModule } from './modules/first/first-module';
import { SecondModule } from './modules/second/second-module';
import { ComponentsModule } from "./shared/components/components-module";
import { Red } from "./shared/components/red/red";
import { Blue } from './shared/components/blue/blue';
import { filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // changeDetection: ChangeDetectionStrategy.,
  encapsulation: ViewEncapsulation.None

})

export class App {
  name: string = 'Миша';

  constructor(private cdr: ChangeDetectorRef) {
        setTimeout(() => {
            this.name = 'Максим';
            this.cdr.markForCheck();
        }, 3000);
    }
}



