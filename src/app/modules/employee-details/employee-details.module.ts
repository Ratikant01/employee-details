import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EmployeeDetailsRoutingModule} from './employee-details-routing.module';
import {EmployeeDetailsComponent} from './employee-details.component';

@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule {
}
