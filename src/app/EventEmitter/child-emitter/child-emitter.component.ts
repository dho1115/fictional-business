import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-emitter',
  templateUrl: './child-emitter.component.html',
  styleUrls: ['./child-emitter.component.css']
})
export class ChildEmitterComponent implements OnInit {
  @Output() childObject = new EventEmitter<{}>();
  @Output() newChildEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.newChildEmitter.emit('Auto-emits Message after 5300 seconds!!!');
      console.log('emitted!!!')
    }, 5300);
  }

  emitChildObject() {
    this.childObject.emit({['message from emitChildObject()']: 'Activate displayChildEmitterData inside the parent-emiiter!!!'})
  }

}
