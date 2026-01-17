import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('UsuariosController', () => {
  let controller: UsuariosController;
  let mockService: Partial<Record<keyof UsuariosService, jest.Mock>>;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      updateProfile: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [
        {
          provide: UsuariosService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
