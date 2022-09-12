import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.css']
})
export class InnerChildComponent implements OnInit {
  @Input() messageFromChild: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
