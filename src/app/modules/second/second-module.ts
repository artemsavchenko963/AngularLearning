import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModule } from '../first/first-module';
import { Blue } from '../../shared/components/blue/blue';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirstModule,
    Blue
  ]
})
export class SecondModule { }
