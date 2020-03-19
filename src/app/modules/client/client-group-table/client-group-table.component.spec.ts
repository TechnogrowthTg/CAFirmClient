import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGroupTableComponent } from './client-group-table.component';

describe('ClientGroupTableComponent', () => {
  let component: ClientGroupTableComponent;
  let fixture: ComponentFixture<ClientGroupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGroupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
