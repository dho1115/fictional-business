import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inside-child',
  templateUrl: './inside-child.component.html',
  styleUrls: ['./inside-child.component.css']
})

export class InsideChildComponent implements OnInit {
  @ViewChild("insideChild", {static: true}) getInsideChild: ElementRef;
  @ViewChild("insideH3", {static: true}) getH3: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log({ getInsideChild: this.getInsideChild.nativeElement.children[0].firstChild.data });
    console.log({ getH3: this.getH3.nativeElement.firstChild.data })
  }

}
