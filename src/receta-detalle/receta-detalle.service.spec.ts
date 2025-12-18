import { Test, TestingModule } from '@nestjs/testing';
import { RecetaDetalleService } from './receta-detalle.service';

describe('RecetaDetalleService', () => {
  let service: RecetaDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetaDetalleService],
    }).compile();

    service = module.get<RecetaDetalleService>(RecetaDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
