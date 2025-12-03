import { Attribute, ChangeDetectionStrategy, Component,
  ContentChild, ElementRef, input, Input, Output, SimpleChange,
  TemplateRef, ChangeDetectorRef, Inject, 
  Optional,
  Self,
  inject,
  HostAttributeToken} from '@angular/core';
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
  providers: [{provide: TOKEN, useValue: 123}],
})

export class Child {

}