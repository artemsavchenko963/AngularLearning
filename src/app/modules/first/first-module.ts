import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { First } from './first';
import { ComponentsModule } from '../../shared/components/components-module';
import { Red } from '../../shared/components/red/red';
import { SecondModule } from '../second/second-module';
import { Blue } from '../../shared/components/blue/blue';
import { Green } from '../../shared/components/green/green';
import { AppCustomDirective } from '../../directives/custom-directive';



@NgModule({
  declarations: [
    First
  ],
  imports: [CommonModule, Green],
  exports: [First]
})
export class FirstModule { }
