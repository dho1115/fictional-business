import { Directive, Input, HostBinding, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[newClassIII]'
})
export class SetterIiiDirective {
  @HostBinding('class') class: string;
  @Input() set newClassIII(condition: boolean) {
    if (condition) {
      console.log({condition})
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      console.log({ condition })
    }
  }

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
