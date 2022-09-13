import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { salesPersonModel } from '../Models/salesPersonModel.model';

@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.component.html',
  styleUrls: ['./sales-person.component.css']
})
export class SalesPersonComponent implements OnInit {
  sales: number = 0;
  @Input() employeeDetails: salesPersonModel = {_empID: '', name: '', sales: 0};
  @Output() _empIDemittor = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emit_empIDToAddSales() {
    this._empIDemittor.emit(this.employeeDetails._empID)
  }

}
