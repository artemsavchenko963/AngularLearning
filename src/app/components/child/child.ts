import { Attribute, ChangeDetectionStrategy, Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgContentExample } from '../../component/ng-content-example/ng-content-example';
import { Random } from '../../services/random';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Random],
})

export class Child {
  constructor( private randomService: Random) {
    console.log(this.randomService.getRandomNum());
   }
}