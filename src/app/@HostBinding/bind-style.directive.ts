import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBindStyle]'
})
export class BindStyleDirective implements OnInit {
  @HostBinding('class') newClass: string;

  ngOnInit() {

  }

  @HostListener('click') styles(e: any) {
    this.newClass = this.newClass == 'makeRed changeOpacity' ? '' : 'makeRed changeOpacity';
  }

  constructor() {

  }

}
