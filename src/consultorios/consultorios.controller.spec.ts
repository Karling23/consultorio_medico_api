import { ConsultoriosController } from './consultorios.controller';
import { ConsultoriosService } from './consultorios.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ConsultoriosController', () => {
  let controller: ConsultoriosController;
  let mockService: Partial<Record<keyof ConsultoriosService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultoriosController],
      providers: [
        {
          provide: ConsultoriosService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ConsultoriosController>(ConsultoriosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
