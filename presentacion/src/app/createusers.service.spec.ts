import { TestBed } from '@angular/core/testing';

import { UserInsertService } from './createusers.service';

describe('CreateusersService', () => {
  let service: UserInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
