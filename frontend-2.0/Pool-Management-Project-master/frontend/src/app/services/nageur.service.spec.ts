import { TestBed } from '@angular/core/testing';

import { NageurService } from './nageur.service';

describe('NageurService', () => {
  let service: NageurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NageurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
