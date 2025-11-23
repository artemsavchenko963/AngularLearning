import { Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgContentExample } from '../../component/ng-content-example/ng-content-example';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [NgContentExample],
})
export class Child {
@Input() currentValue!: number;

  
  }
