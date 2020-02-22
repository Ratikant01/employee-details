import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserAuthGuard} from './core/guards/user-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/user-login/user-login.module').then(mod => mod.UserLoginModule),
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./modules/employee-list/employee-list.module').then(mod => mod.EmployeeListModule),
    canActivate: [UserAuthGuard]
  },
  {
    path: 'employee-details/:id',
    loadChildren: () => import('./modules/employee-details/employee-details.module').then(mod => mod.EmployeeDetailsModule),
    canActivate: [UserAuthGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/global-error/global-error.module').then(mod => mod.GlobalErrorModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employee-list'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
