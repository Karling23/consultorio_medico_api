import { RecetaDetalleController } from './receta-detalle.controller';
import { RecetaDetalleService } from './receta-detalle.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RecetaDetalleController', () => {
  let controller: RecetaDetalleController;
  let mockService: Partial<Record<keyof RecetaDetalleService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaDetalleController],
      providers: [
        {
          provide: RecetaDetalleService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<RecetaDetalleController>(RecetaDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
