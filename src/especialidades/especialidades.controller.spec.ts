import { EspecialidadesController } from './especialidades.controller';
import { EspecialidadesService } from './especialidades.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';

describe('EspecialidadesController', () => {
  let controller: EspecialidadesController;
  let service: {
    create: jest.Mock;
    findAll: jest.Mock;
    findOne: jest.Mock;
    update: jest.Mock;
    remove: jest.Mock;
  };

  beforeEach(() => {
    service = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
    controller = new EspecialidadesController(service as unknown as EspecialidadesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create debe delegar en EspecialidadesService', async () => {
    const dto: CreateEspecialidadDto = {
      nombre: 'Cardiología',
      descripcion: 'Corazón',
    };
    const created = { id_especialidad: 1, ...dto };
    service.create.mockResolvedValue(created);

    const result = await controller.create(dto);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(result).toBe(created);
  });
});
