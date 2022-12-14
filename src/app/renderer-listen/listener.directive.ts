import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective implements OnInit {
  private element: ElementRef;
  private renderer: Renderer2;

  constructor() {

  }

  ngOnInit() {
    this.renderer.listen(this.element.nativeElement, 'mouseover', () => this.renderer.setStyle(this.element.nativeElement, 'color', 'crimson'));

    this.renderer.listen(this.element.nativeElement, 'mouseleave', () => this.renderer.setStyle(this.element.nativeElement, 'color', 'black'));
  }

}
