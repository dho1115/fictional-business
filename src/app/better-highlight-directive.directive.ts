import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit {
  currentColor: string = 'green'
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.currentColor)
    this.renderer.listen(this.elRef.nativeElement, 'click', () => this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.currentColor = this.currentColor == 'green' ? 'red' : 'green'))
  }

}
