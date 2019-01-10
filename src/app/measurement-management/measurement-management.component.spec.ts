import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementManagementComponent } from './measurement-management.component';

describe('MeasurementManagementComponent', () => {
  let component: MeasurementManagementComponent;
  let fixture: ComponentFixture<MeasurementManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
