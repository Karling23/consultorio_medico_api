import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctoresConsultorio } from './doctores-consultorio.entity';
import { CreateDoctoresConsultorioDto } from './dto/create-doctores-consultorio.dto';
import { UpdateDoctoresConsultorioDto } from './dto/update-doctores-consultorio.dto';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class DoctoresConsultoriosService {
  constructor(
    @InjectRepository(DoctoresConsultorio)
    private readonly doctoresConsultorioRepository: Repository<DoctoresConsultorio>,
  ) {}

  async create(createDoctoresConsultorioDto: CreateDoctoresConsultorioDto): Promise<DoctoresConsultorio> {
    const nuevoRegistro = this.doctoresConsultorioRepository.create(createDoctoresConsultorioDto);
    return await this.doctoresConsultorioRepository.save(nuevoRegistro);
  }

  async findAll(query: { page: number; limit: number; search?: string; searchField?: string; sort?: string; order?: 'ASC' | 'DESC' }): Promise<Pagination<DoctoresConsultorio>> {
    const { page, limit, search, searchField, sort, order } = query;

    const qb = this.doctoresConsultorioRepository.createQueryBuilder('doctores_consultorio');

    if (search) {
      // Sin campos de texto obvios
    }

    if (sort) {
      qb.orderBy(`doctores_consultorio.${sort}`, order === 'DESC' ? 'DESC' : 'ASC');
    } else {
      qb.orderBy('doctores_consultorio.id', 'DESC');
    }

    return paginate<DoctoresConsultorio>(qb, { page, limit });
  }

  async findOne(id: number): Promise<DoctoresConsultorio> {
    const registro = await this.doctoresConsultorioRepository.findOneBy({ id });
    if (!registro) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return registro;
  }

  async update(id: number, updateDoctoresConsultorioDto: UpdateDoctoresConsultorioDto): Promise<DoctoresConsultorio> {
    const registro = await this.findOne(id);
    this.doctoresConsultorioRepository.merge(registro, updateDoctoresConsultorioDto);
    return await this.doctoresConsultorioRepository.save(registro);
  }

  async remove(id: number): Promise<void> {
    const result = await this.doctoresConsultorioRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
  }
}
