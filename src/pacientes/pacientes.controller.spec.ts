import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PacientesController', () => {
  let controller: PacientesController;
  let mockService: Partial<Record<keyof PacientesService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacientesController],
      providers: [
        {
          provide: PacientesService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<PacientesController>(PacientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
