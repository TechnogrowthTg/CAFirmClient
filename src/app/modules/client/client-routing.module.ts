import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientTableComponent } from './client-table/client-table.component';
import { ClientFromComponent } from './client-from/client-from.component';
import { ClientTabComponent } from './client-tab/client-tab.component';
import { ClientGroupFormComponent } from './client-group-form/client-group-form.component';


const routes: Routes = [
  {
    path: '',
    component: ClientTabComponent
  },
  {
    path:'client-form/:client_id',
    component: ClientFromComponent
  },
  {
    path:'client-group-form/:group_id',
    component: ClientGroupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
