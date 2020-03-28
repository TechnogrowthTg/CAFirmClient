import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModeOfPaymentComponent } from './service-mode-of-payment.component';

describe('ServiceModeOfPaymentComponent', () => {
  let component: ServiceModeOfPaymentComponent;
  let fixture: ComponentFixture<ServiceModeOfPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceModeOfPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModeOfPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
