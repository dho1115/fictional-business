import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-reference-view-child',
  templateUrl: './local-reference-view-child.component.html',
  styleUrls: ['./local-reference-view-child.component.css']
})
export class LocalReferenceViewChildComponent implements OnInit {
  @ViewChild("textReference", {static: true}) textInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  textRefString() {
    // console.log({textInputRef: this.textInputRef.nativeElement});
  }

}
