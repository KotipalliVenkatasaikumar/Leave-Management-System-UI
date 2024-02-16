import { TestBed } from '@angular/core/testing';

import { LeaveBalanceService } from '../Services/leave-balance.service';

describe('LeaveBalanceService', () => {
  let service: LeaveBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
