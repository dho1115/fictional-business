import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})

export class BetterHighlightDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'purple';
  @HostBinding('style.border') border: string;
  @Input() defaultColor: string = 'burlywood';
  @Input() highlightColor: string = 'yellow';

  currentColor: string = 'green';
  constructor( private elRef: ElementRef, /* private renderer: Renderer2 */ ) { }

  ngOnInit() {
    //https://angular.io/api/core/Renderer2
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightseagreen');
    this.backgroundColor = this.highlightColor;
    this.border = 'none'
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'bisque');
    this.backgroundColor = this.defaultColor;
    this.border = '5.7px solid black';
  }

}
