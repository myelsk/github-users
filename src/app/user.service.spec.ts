import { TestBed, inject } from '@angular/core/testing';

import { RieltorService } from './rieltor.service';

describe('RieltorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RieltorService]
    });
  });

  it('should be created', inject([RieltorService], (service: RieltorService) => {
    expect(service).toBeTruthy();
  }));
});
