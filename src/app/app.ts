import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, signal, ChangeDetectorRef, Inject, inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AppCustomDirective } from './directives/custom-directive';
import { RouterOutlet } from '@angular/router';
import { Child } from './components/child/child';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NgContentExample } 
from 
'./component/ng-content-example/ng-content-example';
import { Dynamic } from './component/dynamic/dynamic';
import { FirstModule } from './modules/first/first-module';
import { SecondModule } from './modules/second/second-module';
import { delay, filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';
import { Data } from './services/data';
import { Random } from './services/random';
import { User } from './services/user';
import { ADMIN_TOKEN, TOKEN, USER_TOKEN } from './shared/tokens/token';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { clear } from 'node:console';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppCustomDirective, AsyncPipe, Child, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  username: string = '';

  @ViewChild('exampleForm') exampleForm!: NgForm;
  @ViewChild('exampleInput') exampleInput!: NgModel;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    setTimeout(() => {
      this.username = this.username;
      this.cdr.detectChanges();
    }, 3000);
  }

  ngDoCheck() {
    console.log('username:', this.username)
  }

  onSubmit(formValue: NgForm) {
    console.log('formValue: ', formValue)
  }

  ngAfterViewInit() {
        this.exampleForm.valueChanges?.subscribe((value) => {
            console.log('exampleForm value: ', value);
        });
        this.exampleInput.valueChanges?.subscribe((value) => {
            console.log('exampleInput value: ', value);
        });
  }
}



