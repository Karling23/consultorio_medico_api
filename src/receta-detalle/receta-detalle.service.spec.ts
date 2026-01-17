import { RecetaDetalleService } from './receta-detalle.service';
import { RecetaDetalle } from './receta-detalle.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

describe('RecetaDetalleService', () => {
  let service: RecetaDetalleService;
  let mockRepository: {
    create: jest.Mock;
    save: jest.Mock;
    findOne: jest.Mock;
    remove: jest.Mock;
  };

  beforeEach(async () => {
    mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
      findOne: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecetaDetalleService,
        {
          provide: getRepositoryToken(RecetaDetalle),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RecetaDetalleService>(RecetaDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
