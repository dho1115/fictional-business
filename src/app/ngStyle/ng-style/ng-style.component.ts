import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  greeting: string = '';
  greetingCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.greeting = 'HELLO!!!'
      this.greetingCreated = true;
    }, 5300);
  }

  changeColor() {
    return this.greetingCreated == false ? "black" : "green";
  }

  ngOnInit(): void {
  }

}
