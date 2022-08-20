import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //===== START: Variable =====
  greeting = false;
  message = false;
  defaultMessage = "No Message Yet."
  //===== END: Variable. =====

}
