import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input('childColor') childColor!: string;
  @Input() name!: string;

    @Output() nameChange = new EventEmitter<string>();
    changeName() {
      this.nameChange.emit('Name specified in the child component');
    }
    
}
