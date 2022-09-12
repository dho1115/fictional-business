import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { EmployeeComponent } from './employee/employee.component';
import { InputComponent } from './input/input.component';
import { NgModelComponent } from './TwoWayDatabinding-ngModel/ng-model/ng-model.component';
import { OnClickShowDataComponent } from './displayNameOnButtonClick/on-click-show-data/on-click-show-data.component';
import { NgIfComponent } from './ngIf/ng-if/ng-if.component';
import { NgStyleComponent } from './ngStyle/ng-style/ng-style.component';
import { SimpleGuessingGameComponent } from './practice/simple-guessing-game/simple-guessing-game.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ParentComponent } from './@Input/parent/parent.component';
import { ChildComponent } from './@Input/child/child.component';
import { InnerChildComponent } from './@Input/inner-child/inner-child.component';
import { ParentEmitterComponent } from './EventEmitter/parent-emitter/parent-emitter.component';
import { ChildEmitterComponent } from './EventEmitter/child-emitter/child-emitter.component';
import { SalesDashboardComponent } from './EventEmitter/CompanyDashboard/sales-dashboard/sales-dashboard.component';
import { SalesPersonComponent } from './EventEmitter/CompanyDashboard/sales-person/sales-person.component';

@NgModule({
  declarations: [
    AppComponent,
    MiscellaneousComponent,
    EmployeeComponent,
    InputComponent,
    NgModelComponent,
    OnClickShowDataComponent,
    NgIfComponent,
    NgStyleComponent,
    SimpleGuessingGameComponent,
    NgClassComponent,
    NgForComponent,
    ParentComponent,
    ChildComponent,
    InnerChildComponent,
    ParentEmitterComponent,
    ChildEmitterComponent,
    SalesDashboardComponent,
    SalesPersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
