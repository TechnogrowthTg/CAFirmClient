import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubGroupComponent } from './service-sub-group.component';

describe('ServiceSubGroupComponent', () => {
  let component: ServiceSubGroupComponent;
  let fixture: ComponentFixture<ServiceSubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSubGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
