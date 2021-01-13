import { TestBed } from '@angular/core/testing';

import { ShoppiesService } from './shoppies.service';

describe('ShoppiesService', () => {
  let service: ShoppiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



