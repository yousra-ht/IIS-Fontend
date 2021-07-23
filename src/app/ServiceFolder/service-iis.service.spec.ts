import { TestBed } from '@angular/core/testing';

import { ServiceIISService } from './service-iis.service';

describe('ServiceIISService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceIISService = TestBed.get(ServiceIISService);
    expect(service).toBeTruthy();
  });
});
