import { Directive, HostBinding, HostListener, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetNewClass]'
})


export class SetNewClassDirective implements OnInit {
  @HostBinding('class') newClass: string;
  @HostListener('click') newListener() {
    this.newClass = this.newClass == 'makeRed' ? "" : "makeRed"
  }

  constructor() {

  }

  ngOnInit() {

  }

}
