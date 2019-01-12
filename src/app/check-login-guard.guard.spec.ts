import { TestBed, async, inject } from '@angular/core/testing';

import { CheckLoginGuardGuard } from './check-login-guard.guard';

describe('CheckLoginGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckLoginGuardGuard]
    });
  });

  it('should ...', inject([CheckLoginGuardGuard], (guard: CheckLoginGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
