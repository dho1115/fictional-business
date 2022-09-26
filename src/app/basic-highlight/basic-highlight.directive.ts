import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicAppHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  constructor (private elementRef: ElementRef) {
    console.log({elementRef})
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'crimson'
    this.elementRef.nativeElement.style.color = 'whiteSmoke'
  }
}
