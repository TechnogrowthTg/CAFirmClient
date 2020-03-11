import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientTableComponent } from './client-table/client-table.component';
import { ClientFromComponent } from './client-from/client-from.component';


const routes: Routes = [
  {
    path: '',
    component: ClientTableComponent
  },
  {
    path:'client-form',
    component: ClientFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
