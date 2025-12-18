import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Consultorio } from './consultorio.entity';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class ConsultoriosService {
    constructor(
        @InjectRepository(Consultorio)
        private readonly consultoriosRepository: Repository<Consultorio>,
    ) {}

    async create(
        createDto: CreateConsultorioDto,
    ): Promise<Consultorio> {
        const consultorio = this.consultoriosRepository.create(createDto);
        return this.consultoriosRepository.save(consultorio);
    }

    async findAll(
    options: IPaginationOptions,
    ): Promise<Pagination<Consultorio>> {
    const qb = this.consultoriosRepository.createQueryBuilder('consultorio');
    return paginate<Consultorio>(qb, options);
}

    async findOne(id: number): Promise<Consultorio | null> {
        return this.consultoriosRepository.findOne({
            where: { id_consultorio: id }, // Ajustado a la PK de tu tabla
        });
    }

    async update(
        id: number,
        updateDto: UpdateConsultorioDto,
    ): Promise<Consultorio | null> {
        const consultorio = await this.findOne(id);
        if (!consultorio) return null;

        Object.assign(consultorio, updateDto);
        return this.consultoriosRepository.save(consultorio);
    }

    async remove(id: number): Promise<Consultorio | null> {
        const consultorio = await this.findOne(id);
        if (!consultorio) return null;

        return this.consultoriosRepository.remove(consultorio);
    }
}