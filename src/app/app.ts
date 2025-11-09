import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
color = 'green';
toggler: boolean = true;
str: string = '';

arr: any[] = ['text', 123, true, [1, 'abc'], NaN, Symbol];

  obj: any = {
    first: {
      second: {
        third: {
          age: 11,
          name: 'Mike',
        },
      },
    },
  };

  someTrackByMethod(index: number, item: any) {
    console.log(1);

    return item;
  }
}


