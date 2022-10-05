import { Directive, Input, TemplateRef, ViewContainerRef, Output } from '@angular/core';

@Directive({
  selector: '[addGreeting]'
})
export class SetIDirective {
  @Input() set addGreeting(person: string) {
    if (person) {
      console.log(`Hello, ${person}!!!`);
      console.log({ template: this.template, viewContainer: this.viewContainer });
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      console.log('Hello... some person who does not have a name... nice to meet you, all the same!!!');
      console.log({ template: this.template, viewContainer: this.viewContainer });
      this.viewContainer.clear();
    }
  }

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
