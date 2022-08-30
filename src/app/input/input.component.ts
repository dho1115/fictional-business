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

  onTextOutput(event: any) {
    const target: HTMLInputElement = event.target;
    this.textOutput= target.value;
  }

}
