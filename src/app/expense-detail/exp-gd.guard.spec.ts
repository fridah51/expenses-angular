import { TestBed } from '@angular/core/testing';

import { ExpGdGuard } from './exp-gd.guard';

describe('ExpGdGuard', () => {
  let guard: ExpGdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExpGdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
