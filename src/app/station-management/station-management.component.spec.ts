import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationManagementComponent } from './station-management.component';

describe('StationManagementComponent', () => {
  let component: StationManagementComponent;
  let fixture: ComponentFixture<StationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
