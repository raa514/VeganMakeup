import { TestBed } from '@angular/core/testing';

import { CallMakeupService } from './call-makeup.service';

describe('CallMakeupService', () => {
  let service: CallMakeupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallMakeupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
