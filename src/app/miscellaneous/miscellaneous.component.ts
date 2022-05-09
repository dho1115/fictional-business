import { Component, OnInit } from '@angular/core';

const externalComponent = 'This is an external component.';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})

export class MiscellaneousComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  outsideComponent = externalComponent;
  greeting = 'Hello from miscellaneous components!!!'

}
