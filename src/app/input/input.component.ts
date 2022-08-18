import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }
  disabled = true;
  textOutput = "Hello";

  onInput(event: any) {
    console.log("OUTPUT: " + (<HTMLInputElement>event.target).value);
    this.textOutput = (<HTMLInputElement>event.target).value;
    return this.textOutput
  }

}
