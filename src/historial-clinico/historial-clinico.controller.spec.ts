import { HistorialClinicoController } from './historial-clinico.controller';
import { HistorialClinicoService } from './historial-clinico.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('HistorialClinicoController', () => {
  let controller: HistorialClinicoController;
  let mockService: Partial<Record<keyof HistorialClinicoService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialClinicoController],
      providers: [
        {
          provide: HistorialClinicoService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<HistorialClinicoController>(HistorialClinicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
