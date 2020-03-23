import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceTableComponent } from './service-table/service-table.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ServiceTableComponent, ServiceFormComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule
  ]
})
export class ServicesModule { }
