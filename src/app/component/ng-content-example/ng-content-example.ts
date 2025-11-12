import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  standalone: true,
  imports: [],
  templateUrl: './ng-content-example.html',
  styleUrl: './ng-content-example.scss',
})
export class NgContentExample {
  className: string = 'NgContentExample';

  getClassName() {
    console.log('className: ', this.className);
  }
}
