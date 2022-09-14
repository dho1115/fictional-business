import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { salesPersonModel } from '../Models/salesPersonModel.model';
@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SalesDashboardComponent implements OnInit {
  allSalesEmployees: salesPersonModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewEmployeeToArray(salesEmployee:salesPersonModel) {
    this.allSalesEmployees = [...this.allSalesEmployees, salesEmployee];
  };

  updateSales(_empID: string) {
    this.allSalesEmployees = this.allSalesEmployees.map(val => {
      val._empID === _empID ? ++val.sales : val;
      return val;
    })
  }

}
