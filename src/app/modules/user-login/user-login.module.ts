import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserLoginRoutingModule} from './user-login-routing.module';
import {UserLoginComponent} from './user-login.component';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserLoginRoutingModule
  ]
})
export class UserLoginModule {
}
