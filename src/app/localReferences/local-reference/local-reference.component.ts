import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeNameRef(empNameRef: HTMLInputElement) {
    console.log({empNameRef, value: empNameRef.value})
  }

}
