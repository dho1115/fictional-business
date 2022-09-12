import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { salesPersonModel } from '../Models/salesPersonModel.model';

@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.component.html',
  styleUrls: ['./sales-person.component.css']
})
export class SalesPersonComponent implements OnInit {
  @Output() SalesPersonEmitter = new EventEmitter<salesPersonModel>();
  @Input() employeeDetails: salesPersonModel = {_empID: '', name: '', sales: 0};

  constructor() { }

  ngOnInit(): void {
  }

  emitNewSalesPerson() {
    this.SalesPersonEmitter.emit({_empID: 'jamie12345', name: 'Jamie Smith', sales: 0});
  }

}
