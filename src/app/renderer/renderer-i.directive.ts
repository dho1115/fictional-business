import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererI]'
})
export class RendererIDirective implements OnInit {

  constructor( private ElementReference: ElementRef, private renderer: Renderer2 ) {
    console.log({ElementReference})
  }

  ngOnInit() {
    this.renderer.setStyle(this.ElementReference.nativeElement, 'backgroundColor', 'bisque')
    this.renderer.addClass(this.ElementReference.nativeElement, 'rendererClass');
    this.renderer.listen(this.ElementReference.nativeElement, 'mouseover', () => {
      this.renderer.setStyle(this.ElementReference.nativeElement, 'backgroundColor', 'red')
    })
    this.renderer.listen(this.ElementReference.nativeElement, 'mouseleave', () => this.renderer.setStyle(this.ElementReference.nativeElement, 'backgroundColor', 'bisque'))
  }

}
