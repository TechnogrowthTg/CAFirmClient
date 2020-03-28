import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';

import { MaterialModule } from 'src/app/material.module';
import { ServiceTabComponent } from './service-tab/service-tab.component';
import { ServiceGroupComponent } from './service-group/service-group.component';
import { ServiceSubGroupComponent } from './service-sub-group/service-sub-group.component';
import { ServiceModeOfPaymentComponent } from './service-mode-of-payment/service-mode-of-payment.component';
import { ServicePayComponent } from './service-pay/service-pay.component';


@NgModule({
  declarations: [ServiceTabComponent, ServiceGroupComponent, ServiceSubGroupComponent, ServiceModeOfPaymentComponent, ServicePayComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule
  ]
})
export class ServicesModule { }
