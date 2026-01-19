import { EspecialidadesService } from './especialidades.service';
import { Especialidad } from './especialidad.entity';
import { NotFoundException } from '@nestjs/common';

describe('EspecialidadesService', () => {
  let service: EspecialidadesService;
  let mockRepository: {
    create: jest.Mock;
    save: jest.Mock;
    createQueryBuilder: jest.Mock;
    findOneBy: jest.Mock;
    remove: jest.Mock;
    merge: jest.Mock;
  };

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
      createQueryBuilder: jest.fn(),
      findOneBy: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn(),
    };
    service = new EspecialidadesService(mockRepository as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create debe llamar a create y save del repositorio', async () => {
    const dto = { nombre: 'Cardiología', descripcion: 'Corazón' } as any;
    const entity = { id_especialidad: 1, ...dto } as Especialidad;
    mockRepository.create.mockReturnValue(entity);
    mockRepository.save.mockResolvedValue(entity);

    const result = await service.create(dto);

    expect(mockRepository.create).toHaveBeenCalledWith(dto);
    expect(mockRepository.save).toHaveBeenCalledWith(entity);
    expect(result).toBe(entity);
  });

  it('findOne debe lanzar NotFoundException si no existe', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    await expect(service.findOne(1)).rejects.toBeInstanceOf(NotFoundException);
  });
});
