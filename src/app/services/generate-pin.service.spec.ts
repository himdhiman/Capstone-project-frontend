import { TestBed } from '@angular/core/testing';

import { GeneratePinService } from './generate-pin.service';

describe('GeneratePinService', () => {
  let service: GeneratePinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratePinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
