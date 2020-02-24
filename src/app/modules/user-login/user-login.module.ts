import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import {UserLoginRoutingModule} from './user-login-routing.module';
import {UserLoginComponent} from './user-login.component';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UserLoginRoutingModule
  ]
})
export class UserLoginModule {
}
