import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-click-show-data',
  templateUrl: './on-click-show-data.component.html',
  styleUrls: ['./on-click-show-data.component.css']
})
export class OnClickShowDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //===== START: VARIABLES. =====
  visibility="hidden";
  text='This is the Text To show.'
  //===== END: VARIABLES. =====

  //===== START: FUNCTIONS. =====
  toggleVisibility() {
    this.visibility = this.visibility == "visible" ? "hidden" : "visible";
    console.log(this.visibility)
  }

  toggleStyles() {
    
  }
  //===== END: FUNCTIONS. =====

}
