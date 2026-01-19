import { CitasMedicasController } from './citas-medicas.controller';
import { CitasMedicasService } from './citas-medicas.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CitasMedicasController', () => {
  let controller: CitasMedicasController;
  let mockService: Partial<Record<keyof CitasMedicasService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitasMedicasController],
      providers: [
        {
          provide: CitasMedicasService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<CitasMedicasController>(CitasMedicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
