import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Input() childGreeting = function() {
    console.log('HELLO FROM CHILD!!!')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
