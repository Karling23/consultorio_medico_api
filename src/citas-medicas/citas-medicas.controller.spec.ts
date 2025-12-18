import { Test, TestingModule } from '@nestjs/testing';
import { CitasMedicasController } from './citas-medicas.controller';

describe('CitasMedicasController', () => {
  let controller: CitasMedicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitasMedicasController],
    }).compile();

    controller = module.get<CitasMedicasController>(CitasMedicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
