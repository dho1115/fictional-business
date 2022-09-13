import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { salesPersonModel } from '../Models/salesPersonModel.model';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  number: number = 100000;
  name: string = '';
  _empID: string = '';
  sales: number = 0;

  @Output() salesEmployeeEmitter = new EventEmitter<salesPersonModel>();

  constructor() { }

  ngOnInit(): void {
  }

  emitNewSalesPerson() {
    ++this.number;
    this._empID = `${this.number}-${this.name.split("").join("")}`;

    this.salesEmployeeEmitter.emit({_empID: this._empID, name: this.name, sales: this.sales});
    console.log(`${JSON.stringify({_empID: this._empID, name: this.name, sales: this.sales})} has been emitted!!!`)
    this.name = ""
  }
}
