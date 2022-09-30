import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor(private elementReference: ElementRef,  private renderer: Renderer2) { }

  @HostListener('mouseenter') makeRed() {
    this.renderer.setStyle(this.elementReference.nativeElement, 'color', 'crimson');
  }

  @HostListener('mouseleave') undo() {
    this.renderer.setStyle(this.elementReference.nativeElement, 'color', 'black');
  }
}
