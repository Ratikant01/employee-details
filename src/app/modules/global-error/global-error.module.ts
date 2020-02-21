import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GlobalErrorRoutingModule} from './global-error-routing.module';
import {GlobalErrorComponent} from './global-error.component';

@NgModule({
  declarations: [GlobalErrorComponent],
  imports: [
    CommonModule,
    GlobalErrorRoutingModule
  ]
})
export class GlobalErrorModule {
}
