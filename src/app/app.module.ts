import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { EmployeeComponent } from './employee/employee.component';
import { InputComponent } from './input/input.component';
import { NgModelComponent } from './TwoWayDatabinding-ngModel/ng-model/ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    MiscellaneousComponent,
    EmployeeComponent,
    InputComponent,
    NgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
