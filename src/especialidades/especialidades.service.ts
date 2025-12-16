import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from './entities/especialidad.entity';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';

@Injectable()
export class EspecialidadesService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
  ) {}

  async create(createEspecialidadDto: CreateEspecialidadDto): Promise<Especialidad> {
    const nuevaEspecialidad = this.especialidadRepository.create(createEspecialidadDto);
    return await this.especialidadRepository.save(nuevaEspecialidad);
  }

  async findAll(): Promise<Especialidad[]> {
    return await this.especialidadRepository.find();
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
    const especialidad = await this.findOne(id);
    await this.especialidadRepository.remove(especialidad);
  }
}
