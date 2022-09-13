import { Component, OnInit } from '@angular/core';
import { salesPersonModel } from '../Models/salesPersonModel.model';
@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent implements OnInit {
  allSalesEmployees: salesPersonModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewEmployeeToArray(salesEmployee:salesPersonModel) {
    this.allSalesEmployees = [...this.allSalesEmployees, salesEmployee];
  };
}
