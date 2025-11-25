import { Attribute, ChangeDetectionStrategy, Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgContentExample } from '../../component/ng-content-example/ng-content-example';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Child {
  name: string;

  constructor(@Attribute('name') name: string) {
    this.name = name;
    console.log('name from attribute:', this.name);
  }
}