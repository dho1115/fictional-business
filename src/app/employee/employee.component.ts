import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
  }
  //===== START: Variables. =====
  employeeName = ""
  displayEmployee = false;
  //===== END: Variables. =====

  //===== START: Functions. =====
  resetEmployee() {
    this.displayEmployee= false;
    return this.employeeName;
  }

  generateDefaultEmployee() {
    this.displayEmployee = !this.displayEmployee;
    console.log({ employee: this.employeeName });
  }

  reset() {
    this.employeeName = '';
  }
  //===== END: Functions. =====
}
