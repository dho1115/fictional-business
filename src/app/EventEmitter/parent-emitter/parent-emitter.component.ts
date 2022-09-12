import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-emitter',
  templateUrl: './parent-emitter.component.html',
  styleUrls: ['./parent-emitter.component.css']
})
export class ParentEmitterComponent implements OnInit {
  displayChildEmitterDataCalled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayChildEmitterData(fromChildObject: {}) {
    //fromChildObject will be equal to whatever is inside the ( ) from this.childObject.emit({['message from emitChildObject()']: 'Activate displayChildEmitterData inside the parent-emiiter!!!'}).
    this.displayChildEmitterDataCalled = !this.displayChildEmitterDataCalled;
    console.log({ fromChildObject })
  }

}
