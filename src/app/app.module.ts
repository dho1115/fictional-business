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

@NgModule({
  declarations: [
    AppComponent,
    MiscellaneousComponent,
    EmployeeComponent,
    InputComponent,
    NgModelComponent,
    OnClickShowDataComponent,
    NgIfComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
