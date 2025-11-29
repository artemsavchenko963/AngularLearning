import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { First } from './first';
import { SecondModule } from '../second/second-module';
import { AppCustomDirective } from '../../directives/custom-directive';



@NgModule({
  declarations: [
    First
  ],
  imports: [CommonModule],
  exports: [First]
})
export class FirstModule { }
