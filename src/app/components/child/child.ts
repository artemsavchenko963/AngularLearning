import { Attribute, ChangeDetectionStrategy, Component,
  ContentChild, ElementRef, input, Input, Output, SimpleChange,
  TemplateRef, ChangeDetectorRef, Inject } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgContentExample } from '../../component/ng-content-example/ng-content-example';
import { Random } from '../../services/random';
import { TOKEN } from '../../shared/tokens/token';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Random, 
    {provide: TOKEN,
    useFactory: () => console.log('Some data...')}
  ],
})

export class Child {
  constructor( 
    @Inject(TOKEN) private token: string
   ) {
    console.log("this.token", this.token)
   }
}