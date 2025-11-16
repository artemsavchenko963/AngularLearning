import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomDirective } from './directives/custom-directive';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { CommonModule } from '@angular/common';
import { NgContentExample } 
from 
'./component/ng-content-example/ng-content-example';
import { Dynamic } from './component/dynamic/dynamic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, CommonModule,
  NgContentExample, CustomDirective, Dynamic],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
 toggler: boolean = true;

 constructor(private viewContainer: ViewContainerRef) {

 }

showComponent() {
  this.viewContainer.createComponent(Dynamic)
} 

async asyncShowComponent() {
  const { Dynamic } = await import('./component/dynamic/dynamic');
  this.viewContainer.createComponent(Dynamic)
} 

@ViewChild('example', {read: ViewContainerRef}) container!: ViewContainerRef;
ngAfterViewInit() {
  const newComponent = this.container.createComponent(Dynamic)
  // newComponent.instance.name = 'new name';
  // newComponent.instance.callName();

  newComponent.setInput('name', 'new name');
  const someData = newComponent.instance.callName();
  console.log('someData', someData);
}

}


