import { Directive, ElementRef, HostBinding, HostListener, Input, Output, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[AppCustomDirective]',
  host: {
    '[style.color]': 'inlineStyle',
    '[attr.color]': 'appCustomDirective',
    '(document:click)': 'changeColor()'
/*
    style: 'color: lime',
    class: 'some-css-class',
    color: 'some-attr-data',
    color: '',
    '[style.color]': '"lime"',
    '[style.width.%]': '20',
    '[class.some-css-class]': 'true',
    '[attr.color]': '"some-attr-data"',
    '[attr.color]': '""',
    '[style.color]': 'inlineStyle',
    '[style.color]': '!true ? "green" : "red"',
    '[attr.color]': 'appCustomDirective',
    '(document:click)': 'changeColor($event, true)',
    '(document:click)': 'true && changeColor($event, true)',
*/
  },
})
export class AppCustomDirective{
  inlineStyle: string = 'orange';

  @Input() appCustomDirective!: string;

    @HostListener('document:click') handleClick() {
      this.changeColor();
    }

    ngOnInit() {
      setInterval(() => {
        this.changeColor();
      }, 10000);
    }

    changeColor() {
      console.log('changeColor called, new color:', this.inlineStyle);
      this.inlineStyle = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    }
  }

