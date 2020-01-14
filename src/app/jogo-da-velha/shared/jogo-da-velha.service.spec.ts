import { TestBed } from '@angular/core/testing';

import { JogoDaVelhaService } from './jogo-da-velha.service';

describe('JogoDaVelhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JogoDaVelhaService = TestBed.get(JogoDaVelhaService);
    expect(service).toBeTruthy();
  });
});
