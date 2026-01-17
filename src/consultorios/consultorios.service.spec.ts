import { ConsultoriosService } from './consultorios.service';
import { Consultorio } from './consultorio.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

describe('ConsultoriosService', () => {
  let service: ConsultoriosService;
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
        ConsultoriosService,
        {
          provide: getRepositoryToken(Consultorio),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ConsultoriosService>(ConsultoriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
