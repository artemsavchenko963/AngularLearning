import { Component, ElementRef, TemplateRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
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
  title: string = 'title!@#';

  // @ViewChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('paragraph', {read: Child, static: true}) paragraph!: ElementRef<HTMLParagraphElement>;
  
  // @ViewChild('paragraph') paragraph!: QueryList<ElementRef<HTMLParagraphElement>>;
  // @ViewChild('template') template!: QueryList<TemplateRef<HTMLParagraphElement>>;
  // @ViewChild(Child, {static: true}) component!: QueryList<Child>;

  @ViewChildren('paragraph') paragraph!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('template') template!: QueryList<TemplateRef<HTMLParagraphElement>>;
  @ViewChildren('Child, paragraph') component!: QueryList<Child>;

  // ngOnInit() {
  //   console.log('paragraph ngOnInit', this.paragraph)
  // }


  ngAfterViewInit() {
    // console.log('paragraph', this.paragraph);
    // console.log('template', this.template);
    // console.log('component', this.component); 

    // this.paragraph.nativeElement.textContent = 'qwerty'
    this.component.forEach((item) => console.log('item', item));
  }
}


