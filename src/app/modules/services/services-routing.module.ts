import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTableComponent } from './service-table/service-table.component';
import { ServiceFormComponent } from './service-form/service-form.component';


const routes: Routes = [
  { path: '', component: ServiceTableComponent },
  { path: 'service-form', component: ServiceFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
