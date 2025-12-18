import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Paciente } from './paciente.entity';
import { CreatePacienteDto } from './dto/create-pacientes.dto';
import { UpdatePacienteDto } from './dto/update-pacientes.dto';

@Injectable()
export class PacientesService {
    constructor(
        @InjectRepository(Paciente)
        private readonly pacientesRepository: Repository<Paciente>,
    ) {}

    async create(
        createDto: CreatePacienteDto,
    ): Promise<Paciente> {
        const paciente = this.pacientesRepository.create(createDto);
        return this.pacientesRepository.save(paciente);
    }

    async findAll(): Promise<Paciente[]> {
        return this.pacientesRepository.find({
            relations: ['usuario'], // Se agrega la relación con la tabla usuarios
        });
    }

    async findOne(id: number): Promise<Paciente | null> {
        return this.pacientesRepository.findOne({
            where: { id_paciente: id },
            relations: ['usuario'], // Se agrega la relación para búsqueda individual
        });
    }

    async update(
        id: number,
        updateDto: UpdatePacienteDto,
    ): Promise<Paciente | null> {
        const paciente = await this.findOne(id);
        if (!paciente) return null;

        Object.assign(paciente, updateDto);
        return this.pacientesRepository.save(paciente);
    }

    async remove(id: number): Promise<Paciente | null> {
        const paciente = await this.findOne(id);
        if (!paciente) return null;

        return this.pacientesRepository.remove(paciente);
    }
}