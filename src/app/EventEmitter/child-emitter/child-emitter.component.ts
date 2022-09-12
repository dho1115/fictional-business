import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-emitter',
  templateUrl: './child-emitter.component.html',
  styleUrls: ['./child-emitter.component.css']
})
export class ChildEmitterComponent implements OnInit {
  @Output() childObject = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {

  }

  emitChildObject() {
    this.childObject.emit({['message from emitChildObject()']: 'Activate displayChildEmitterData inside the parent-emiiter!!!'})
  }

}
