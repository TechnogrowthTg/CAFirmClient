import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFromComponent } from './client-from.component';

describe('ClientFromComponent', () => {
  let component: ClientFromComponent;
  let fixture: ComponentFixture<ClientFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
