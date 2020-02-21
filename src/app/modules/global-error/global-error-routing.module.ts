import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GlobalErrorComponent} from './global-error.component';

const routes: Routes = [
  {
    path: '', component: GlobalErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalErrorRoutingModule {
}
