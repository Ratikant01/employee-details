import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import {EmployeeDetailsRoutingModule} from './employee-details-routing.module';
import {EmployeeDetailsComponent} from './employee-details.component';

@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule {
}
