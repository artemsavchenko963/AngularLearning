import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomDirective } from './directives/custom-directive';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, CommonModule,
    NgContentExample, CustomDirective, Dynamic, FirstModule, SecondModule, ComponentsModule, Red],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}


