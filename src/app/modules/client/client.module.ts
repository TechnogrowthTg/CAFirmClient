import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ClientFormComponent } from './client-form/client-form.component';



@NgModule({
  declarations: [ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ]
})
export class ClientModule { }
