import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTabComponent } from './service-tab/service-tab.component';


const routes: Routes = [
  { path: '', component: ServiceTabComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
