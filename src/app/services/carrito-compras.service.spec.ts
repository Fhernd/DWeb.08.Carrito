import { TestBed, inject } from '@angular/core/testing';

import { CarritoComprasService } from './carrito-compras.service';

describe('CarritoComprasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarritoComprasService]
    });
  });

  it('should be created', inject([CarritoComprasService], (service: CarritoComprasService) => {
    expect(service).toBeTruthy();
  }));
});
