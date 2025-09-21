import { Test, TestingModule } from '@nestjs/testing';
import { HistoriasController } from './historias.controller';

describe('HistoriasController', () => {
  let controller: HistoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoriasController],
    }).compile();

    controller = module.get<HistoriasController>(HistoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
