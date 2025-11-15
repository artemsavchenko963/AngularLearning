import { Directive, ElementRef, HostBinding, Input, input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirective {
    @Input('color') colorProps!: string;
    @Input('appCustomDirective') appCustomDirectiveProps!: string;

  constructor(private element: ElementRef) {
    console.log('appCustomDirective');
      console.log('element: ', this.element)

    this.element.nativeElement.style.color = 'colorProperty';
  }

  // @HostBinding('style.color') color = 'lime';
  // @HostBinding('attr.color') attr = 'lime';
  // @HostBinding('class.color') class: boolean = true;
  @HostBinding('style.color') color = undefined;
  @HostBinding('attr.color') attr = null;
  @HostBinding('class.color') class: boolean = false;

  ngOnChanges() {
    console.log('colorProps', this.colorProps)
  }
}
