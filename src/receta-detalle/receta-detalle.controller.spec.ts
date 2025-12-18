import { Test, TestingModule } from '@nestjs/testing';
import { RecetaDetalleController } from './receta-detalle.controller';

describe('RecetaDetalleController', () => {
  let controller: RecetaDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaDetalleController],
    }).compile();

    controller = module.get<RecetaDetalleController>(RecetaDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
