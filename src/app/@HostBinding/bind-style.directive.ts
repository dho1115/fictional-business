import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBindStyle]'
})
export class BindStyleDirective {
  @HostBinding('style') bindStyles: {}

  @HostListener('click') styles() {
    this.bindStyles = { color: 'whitesmoke', backgroundColor: 'black' };
  }

  constructor() { }

}
