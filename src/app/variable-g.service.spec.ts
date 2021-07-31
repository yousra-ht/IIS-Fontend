import { TestBed } from '@angular/core/testing';

import { VariableGService } from './variable-g.service';

describe('VariableGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariableGService = TestBed.get(VariableGService);
    expect(service).toBeTruthy();
  });
});
