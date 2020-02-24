import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AutoFocusDirective} from './directives/auto-focus.directive';
import {ReverseStringPipe} from './pipes/reverse-string.pipe';

@NgModule({
  declarations: [
    AutoFocusDirective,
    ReverseStringPipe
  ],
  exports: [
    ReverseStringPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
