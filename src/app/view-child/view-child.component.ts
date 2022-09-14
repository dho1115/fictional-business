import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  @ViewChild("employeeName", {static: true}) empNameRef: ElementRef;

  constructor() { }

  employeeNameRef(empNameRef: HTMLInputElement) {
    console.log({ empNameRef })
  }

  viewChildComponent() {
    console.log({ empNameRef: this.empNameRef })
  }
}
