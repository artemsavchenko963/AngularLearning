import { Attribute, Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [],
})
export class Child {
  name: string;

  constructor(@Attribute('name') name: string) {
    this.name = name;
    console.log('name from attribute:', this.name);
  }
}

