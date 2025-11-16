import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  imports: [],
  standalone: true, 
  templateUrl: './dynamic.html',
  styleUrl: './dynamic.scss',
})
export class Dynamic {
@Input() name!: string;

ngOnChanges() {
  console.log('ngOnChages', this.name);
}
callName() {
  console.log('callName', this.name);

  return 'any name' //undefined fixed
}
}
