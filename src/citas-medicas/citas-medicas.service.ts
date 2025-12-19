import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CitaMedica } from './cita-medica.entity';
import { CreateCitaMedicaDto } from './dto/create-cita-medica.dto';
import { UpdateCitaMedicaDto } from './dto/update-cita-medica.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class CitasMedicasService {
    constructor(
        @InjectRepository(CitaMedica)
        private readonly citasRepository: Repository<CitaMedica>,
    ) {}

    async create(
        createDto: CreateCitaMedicaDto,
    ): Promise<CitaMedica> {
        const cita = this.citasRepository.create(createDto);
        return this.citasRepository.save(cita);
    }

    async findAll(
    options: IPaginationOptions,
    ): Promise<Pagination<CitaMedica>> {
    const qb = this.citasRepository.createQueryBuilder('cita_medica');
    return paginate<CitaMedica>(qb, options);
    }

    async findOne(id: number): Promise<CitaMedica | null> {
        return this.citasRepository.findOne({
            where: { id_cita: id },
        });
    }

    async update(
        id: number,
        updateDto: UpdateCitaMedicaDto,
    ): Promise<CitaMedica | null> {
        const cita = await this.findOne(id);
        if (!cita) return null;

        Object.assign(cita, updateDto);
        return this.citasRepository.save(cita);
    }

    async remove(id: number): Promise<CitaMedica | null> {
        const cita = await this.findOne(id);
        if (!cita) return null;

        return this.citasRepository.remove(cita);
    }
}