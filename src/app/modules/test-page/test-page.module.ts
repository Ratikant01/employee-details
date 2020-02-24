import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestPageRoutingModule} from './test-page-routing.module';
import {TestPageComponent} from './test-page.component';
import {TestChildComponent} from './components/test-child/test-child.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TestPageComponent,
    TestChildComponent
  ],
  imports: [
    CommonModule,
    TestPageRoutingModule,
    FormsModule
  ]
})
export class TestPageModule {
}
