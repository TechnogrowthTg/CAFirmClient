import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientTableComponent } from './client-table/client-table.component';
import { ClientFromComponent } from './client-from/client-from.component';
import { MaterialModule } from 'src/app/material.module';
import { ClientTabComponent } from './client-tab/client-tab.component';
import { ClientGroupTableComponent } from './client-group-table/client-group-table.component';
import { ClientGroupFormComponent } from './client-group-form/client-group-form.component';


@NgModule({
  declarations: [ClientTableComponent, ClientFromComponent, ClientTabComponent, ClientGroupTableComponent, ClientGroupFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ]
})
export class ClientModule { }
