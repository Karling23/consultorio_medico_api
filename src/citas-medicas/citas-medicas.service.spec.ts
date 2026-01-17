import { CitasMedicasService } from './citas-medicas.service';
import { CitaMedica } from './cita-medica.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

describe('CitasMedicasService', () => {
  let service: CitasMedicasService;
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
        CitasMedicasService,
        {
          provide: getRepositoryToken(CitaMedica),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CitasMedicasService>(CitasMedicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
