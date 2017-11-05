/**
 * Created by griga on 7/11/16.
 */
//import {RouteGuard}          from './route-guard.service';
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule}from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


export const routes: Routes = [
  {
    path      : '',
    redirectTo: 'dashboard',
    pathMatch : 'full'
  },
  {
    path     : 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
