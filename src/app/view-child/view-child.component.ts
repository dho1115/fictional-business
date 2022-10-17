import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild("employeeName", {static: true}) empNameRef: ElementRef; //strict: false.

  constructor() { }

  employeeNameRef(empNameRef: HTMLInputElement) {
    console.log({ empNameRef })
  }

  ngOnInit() {
    console.log({empNameRef: this.empNameRef})
  }

  viewChildComponent() {
    console.log({ empNameRef: this.empNameRef })
  }
}
