import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "Your Name Here."
  showName = false;
}
