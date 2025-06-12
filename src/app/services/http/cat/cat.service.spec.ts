import { TestBed } from '@angular/core/testing';

import { HttpUserService } from './cat.service';

describe('HttpUserService', () => {
  let service: HttpUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
