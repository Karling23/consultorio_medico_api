import { HistorialClinicoService } from './historial-clinico.service';
import { HistorialClinico } from './schemas/historial-clinico.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

describe('HistorialClinicoService', () => {
  let service: HistorialClinicoService;
  let mockModel: {
    create: jest.Mock;
    find: jest.Mock;
    findById: jest.Mock;
    findByIdAndUpdate: jest.Mock;
    findByIdAndDelete: jest.Mock;
    countDocuments: jest.Mock;
  };

  beforeEach(async () => {
    mockModel = {
      create: jest.fn(),
      find: jest.fn().mockReturnThis(),
      sort: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn(),
      findById: jest.fn(),
      findByIdAndUpdate: jest.fn().mockReturnThis(),
      findByIdAndDelete: jest.fn().mockReturnThis(),
      countDocuments: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HistorialClinicoService,
        {
          provide: getModelToken(HistorialClinico.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<HistorialClinicoService>(HistorialClinicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
