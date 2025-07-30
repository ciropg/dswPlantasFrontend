import { TestBed } from '@angular/core/testing';

import { HierbaService } from './hierba.service';

describe('HierbaService', () => {
  let service: HierbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HierbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
