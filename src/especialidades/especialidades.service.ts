import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Especialidad } from './especialidad.entity';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { Doctor } from '../doctores/doctor.entity';

@Injectable()
export class EspecialidadesService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
    @InjectRepository(Doctor)
    private readonly doctoresRepository: Repository<Doctor>,
  ) {}

  async create(createEspecialidadDto: CreateEspecialidadDto): Promise<Especialidad> {
    const nuevaEspecialidad = this.especialidadRepository.create(createEspecialidadDto);
    return await this.especialidadRepository.save(nuevaEspecialidad);
  }

  async findAll(query: { page: number; limit: number; search?: string; searchField?: string; sort?: string; order?: 'ASC' | 'DESC' }): Promise<Pagination<Especialidad>> {
    const { page, limit, search, searchField, sort, order } = query;

    const qb = this.especialidadRepository.createQueryBuilder('especialidad');

    if (search) {
      const allowedSearchFields = ['nombre', 'descripcion'];

      if (searchField && allowedSearchFields.includes(searchField)) {
        qb.andWhere(`especialidad.${searchField} ILIKE :search`, { search: `%${search}%` });
      } else {
        qb.andWhere(
          '(especialidad.nombre ILIKE :search OR especialidad.descripcion ILIKE :search)',
          { search: `%${search}%` },
        );
      }
    }

    if (sort) {
      qb.orderBy(`especialidad.${sort}`, order === 'DESC' ? 'DESC' : 'ASC');
    } else {
      qb.orderBy('especialidad.id_especialidad', 'DESC');
    }

    return paginate<Especialidad>(qb, { page, limit });
  }

  async findOne(id: number): Promise<Especialidad> {
    const especialidad = await this.especialidadRepository.findOneBy({ id_especialidad: id });
    if (!especialidad) {
      throw new NotFoundException(`Especialidad con ID ${id} no encontrada`);
    }
    return especialidad;
  }

  async update(id: number, updateEspecialidadDto: UpdateEspecialidadDto): Promise<Especialidad> {
    const especialidad = await this.findOne(id);
    this.especialidadRepository.merge(especialidad, updateEspecialidadDto);
    return await this.especialidadRepository.save(especialidad);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);

    const doctoresCount = await this.doctoresRepository.count({
      where: { id_especialidad: id },
    });
    if (doctoresCount > 0) {
      throw new BadRequestException(
        `No se puede eliminar la especialidad porque tiene ${doctoresCount} doctor(es) asociado(s).`
      );
    }

    const especialidad = await this.findOne(id);
    await this.especialidadRepository.remove(especialidad);
  }
}
