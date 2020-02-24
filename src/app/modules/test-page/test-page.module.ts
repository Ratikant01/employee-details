import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import {TestPageRoutingModule} from './test-page-routing.module';
import {TestPageComponent} from './test-page.component';
import {TestChildComponent} from './components/test-child/test-child.component';

@NgModule({
  declarations: [
    TestPageComponent,
    TestChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TestPageRoutingModule
  ]
})
export class TestPageModule {
}
