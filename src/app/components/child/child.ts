import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef } from '@angular/core';
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
  @Input() number!: number;
  
  ngDoCheck() {
    console.log('ngDoCheck app-child');
  }
}
