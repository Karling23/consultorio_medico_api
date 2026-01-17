import { PacientesService } from './pacientes.service';
import { Paciente } from './paciente.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

describe('PacientesService', () => {
  let service: PacientesService;
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
        PacientesService,
        {
          provide: getRepositoryToken(Paciente),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PacientesService>(PacientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
