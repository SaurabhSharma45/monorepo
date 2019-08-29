import { TestBed } from '@angular/core/testing';

import { Module1Service } from './module1.service';

describe('Module1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Module1Service = TestBed.get(Module1Service);
    expect(service).toBeTruthy();
  });
});
