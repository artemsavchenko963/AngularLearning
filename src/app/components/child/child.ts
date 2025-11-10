import { Component, input, Input, Output, SimpleChange } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
@Input() title!: string;
@Input() name!: string;

  constructor() {
    console.log(
      '%c Component app-child created !',
      'background: darkgreen'

    )
  }
  
  ngOnChanges(changes: SimpleChange): void {
    console.log('%c ngOnChanges', 'color: aqua');
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('%c ngOnInit', 'color: deepskyblue');
  }

  ngDoCheck(): void {
    console.log('%c ngDoCheck', 'color: pink');
  }

  ngAfterContentInit(): void {
    console.log('%c ngAfterContentInit', 'color: lightgreen');
  }

  ngAfterContentChecked(): void {
    console.log('%c ngAfterContentChecked', 'color: green');
  }

  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'color: yellow');
    // this.title = '123';
    setTimeout(() => {
      this.title = '123';
    }, 0);
  }

  ngAfterViewChecked(): void {
    console.log('%c ngAfterViewChecked', 'color: orange');
  }

  ngOnDestroy(): void {
    console.log('%c ngOnDestroy', 'color: red');
  }
}
