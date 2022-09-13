import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  number: number = 0;
  name: string = ''
  empID: string = (this.number + 100000) + this.name.split("").join("");
  
  constructor() { }

  ngOnInit(): void {
  }

}
