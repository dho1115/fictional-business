import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      console.log({ condition, templateRef: this.templateRef, vcRef: this.vcRef })
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      console.log({ templateRef: this.templateRef, vcRef: this.vcRef })
      this.vcRef.clear()
    }
  } //This is the alternative to *ngIf
  
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {  }

}
