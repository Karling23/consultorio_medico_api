import { MedicamentosService } from './medicamentos.service';
import { Medicamento } from './schemas/medicamento.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

describe('MedicamentosService', () => {
  let service: MedicamentosService;
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
        MedicamentosService,
        {
          provide: getModelToken(Medicamento.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<MedicamentosService>(MedicamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
