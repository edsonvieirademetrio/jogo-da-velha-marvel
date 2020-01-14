import { TestBed } from '@angular/core/testing';

import { MarvelApiService } from './marvel-api.service';

describe('MarvelApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelApiService = TestBed.get(MarvelApiService);
    expect(service).toBeTruthy();
  });
});
