import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit {
  currentColor: string = 'green';
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    //https://angular.io/api/core/Renderer2
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightseagreen');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'bisque');
  }

}
