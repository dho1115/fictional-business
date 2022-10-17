import { Directive, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class SetIvDirective {

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<object>) { }

  ngOnInit() {
    const condition = true;

    condition && this.viewContainer.createEmbeddedView(this.template);
    !condition && this.viewContainer.clear();
  }

}
