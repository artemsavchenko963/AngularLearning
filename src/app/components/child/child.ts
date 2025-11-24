import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgContentExample } from '../../component/ng-content-example/ng-content-example';
import { Green } from '../../component/green/green';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [Green],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child {
  @Input() number!: number;

   constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }
  
  ngDoCheck() {
    console.log('ngDoCheck app-child');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.number = 100;
      this.cdr.detectChanges();
    }, 3000)

    // this.number = 100;
    // this.cdr.detectChanges();
  }
}
