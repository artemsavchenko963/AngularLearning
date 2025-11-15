import { Directive, ElementRef, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true,
  exportAs: 'custom',
})
export class CustomDirective {
    @Input('color') colorProps!: string;
    @Input('appCustomDirective') appCustomDirectiveProps!: string;

    @Output() colorChange = new EventEmitter();

  constructor(private element: ElementRef) {
    console.log('appCustomDirective');
      console.log('element: ', this.element)

    this.element.nativeElement.style.color = 'colorProperty';
  }

  @HostBinding('style.color') color = 'lime';
  @HostBinding('attr.color') attr = 'lime';
  @HostBinding('class.color') class: boolean = true;
  @HostBinding('style.background') bgColor = 'transparent'
  // @HostBinding('style.color') color = undefined;
  // @HostBinding('attr.color') attr = null;
  // @HostBinding('class.color') class: boolean = false;

// ==================================
  // @HostListener('click') handleClick() {
  //   console.log('click!!')
  // }
  // @HostListener('document:click', ['$event.target']) handleClick(data: any) {
  //   console.log('click!!')
  //   console.log('data', data)
  // }

  // ===========================

  // @HostListener('mouseenter') handleMouseEnter() {
  //   this.bgColor = 'orange';
  // }
  // @HostListener('mouseleave') handleMouseLeave() {
  //       this.bgColor = 'transparent';

  @HostListener('click') handleClick() {
        this.getRandomColor();

  }
  ngAfterViewInit() {
    setTimeout(() => {
      console.log('colorProps', this.colorProps)
      console.log('appCustomDirectiveProps', this.appCustomDirectiveProps);
      this.bgColor = this.appCustomDirectiveProps;
  }, 10);
    
  }

  getRandomColor() {
    const newColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

    this.colorChange.emit(newColor);
    return newColor;
  }
}
