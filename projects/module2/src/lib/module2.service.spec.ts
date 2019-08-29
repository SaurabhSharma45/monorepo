import { TestBed } from '@angular/core/testing';

import { Module2Service } from './module2.service';

describe('Module2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Module2Service = TestBed.get(Module2Service);
    expect(service).toBeTruthy();
  });
});
