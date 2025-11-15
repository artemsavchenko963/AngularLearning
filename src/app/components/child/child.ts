import { Component, ContentChild, ElementRef, input, Input, Output, SimpleChange, TemplateRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgContentExample } from '../../component/ng-content-example/ng-content-example';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.scss',
  imports: [NgContentExample],
})
export class Child {
  // @ContentChild('selector') propertyName: dataType;
  // @ContentChild('tag') paragraph!: ElementRef<HTMLParagraphElement>;
  // @ContentChild(TemplateRef) template!: TemplateRef<HTMLParagraphElement>;
  // @ContentChild('descendants', { descendants: true }) component!: NgContentExample;
  
  // ngAfterContentInit() {
  //   this.paragraph && console.log('paragraph', this.paragraph);
  //   this.template && console.log('template', this.template);
  //   this.component && console.log('component', this.component);

  //   this.component?.getClassName();
  
  }
