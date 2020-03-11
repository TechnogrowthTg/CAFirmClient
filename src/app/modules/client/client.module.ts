import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientTableComponent } from './client-table/client-table.component';
import { ClientFromComponent } from './client-from/client-from.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ClientTableComponent, ClientFromComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ]
})
export class ClientModule { }
