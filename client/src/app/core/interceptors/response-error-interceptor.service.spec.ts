import { TestBed } from '@angular/core/testing';

import { ResponseErrorInterceptorService } from './response-error-interceptor.service';

describe('ResponseErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseErrorInterceptorService = TestBed.get(ResponseErrorInterceptorService);
    expect(service).toBeTruthy();
  });
});
