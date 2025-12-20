import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Paciente } from './paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

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

    async findAll(query: any): Promise<Pagination<Paciente>> {
        const { page, limit, search } = query;
        const qb = this.pacientesRepository.createQueryBuilder('paciente');

        if (search) {
            // Buscamos por cedula, telefono o direccion (ajusta según tus columnas reales)
            qb.andWhere(
                '(paciente.cedula ILIKE :search OR paciente.telefono ILIKE :search OR paciente.direccion ILIKE :search)',
                { search: `%${search}%` }
            );
        }

        // Ordenar por ID o Cédula por defecto
        qb.orderBy('paciente.id_paciente', 'ASC');

        return paginate<Paciente>(qb, { page, limit });
    }

    async findOne(id: number): Promise<Paciente | null> {
        return this.pacientesRepository.findOne({
            where: { id_paciente: id },
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