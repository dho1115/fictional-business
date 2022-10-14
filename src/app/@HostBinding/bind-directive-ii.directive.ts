import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBindDirectiveIi]'
})
export class BindDirectiveIiDirective {
  @HostBinding('style') appBindDirectiveIi;

  constructor() { }

}
