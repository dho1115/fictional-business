import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeName = 'No Employee Yet.';

  generateDefaultEmployee() {
    this.employeeName = this.employeeName == 'No Employee Yet' ? 'Jamie' : 'No Employee Yet';
  }

}
