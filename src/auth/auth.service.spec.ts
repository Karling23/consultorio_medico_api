import { AuthService } from './auth.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let mockUsuariosService: Partial<Record<keyof UsuariosService, jest.Mock>>;
  let mockJwtService: Partial<Record<keyof JwtService, jest.Mock>>;

  beforeEach(async () => {
    mockUsuariosService = {
      findByNombreUsuario: jest.fn(),
      create: jest.fn(),
    };

    mockJwtService = {
      sign: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsuariosService, useValue: mockUsuariosService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
