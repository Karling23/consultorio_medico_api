import { MedicamentosController } from './medicamentos.controller';
import { MedicamentosService } from './medicamentos.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedicamentosController', () => {
  let controller: MedicamentosController;
  let mockService: Partial<Record<keyof MedicamentosService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicamentosController],
      providers: [
        {
          provide: MedicamentosService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<MedicamentosController>(MedicamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
