import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ContactTableComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule

  ]
})
export class ContactModule { }
