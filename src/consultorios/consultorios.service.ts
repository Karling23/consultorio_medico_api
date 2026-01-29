import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Consultorio } from './consultorio.entity';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { CitaMedica } from '../citas-medicas/cita-medica.entity';
import { DoctoresConsultorio } from '../doctoresConsultorios/doctores-consultorio.entity';

@Injectable()
export class ConsultoriosService {
    constructor(
        @InjectRepository(Consultorio)
        private readonly consultoriosRepository: Repository<Consultorio>,
        @InjectRepository(CitaMedica)
        private readonly citasRepository: Repository<CitaMedica>,
        @InjectRepository(DoctoresConsultorio)
        private readonly doctoresConsultoriosRepository: Repository<DoctoresConsultorio>,
    ) {}

    async create(
        createDto: CreateConsultorioDto,
    ): Promise<Consultorio> {
        const consultorio = this.consultoriosRepository.create(createDto);
        return this.consultoriosRepository.save(consultorio);
    }

    async findAll(query: any): Promise<Pagination<Consultorio>> {
        const { page, limit, search } = query;
        const qb = this.consultoriosRepository.createQueryBuilder('consultorio');

        if (search) {
            // Buscamos en las columnas 'nombre' y 'ubicacion' de tu tabla consultorios
            qb.andWhere(
                '(consultorio.nombre ILIKE :search OR consultorio.ubicacion ILIKE :search)',
                { search: `%${search}%` }
            );
        }

        // Ordenamos por nombre de forma ascendente por defecto
        qb.orderBy('consultorio.nombre', 'ASC');

        return paginate<Consultorio>(qb, { page, limit });
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

    async remove(id: number): Promise<Consultorio> {
        const consultorio = await this.findOne(id);
        if (!consultorio) {
            throw new NotFoundException(`Consultorio con ID ${id} no encontrado`);
        }

        const citasCount = await this.citasRepository.count({ where: { id_consultorio: id } });
        if (citasCount > 0) {
            throw new BadRequestException(
                `No se puede eliminar el consultorio porque tiene ${citasCount} cita(s) asociada(s).`
            );
        }

        const doctoresCount = await this.doctoresConsultoriosRepository.count({
            where: { id_consultorio: id },
        });
        if (doctoresCount > 0) {
            throw new BadRequestException(
                `No se puede eliminar el consultorio porque tiene ${doctoresCount} doctor(es) asociado(s).`
            );
        }

        return this.consultoriosRepository.remove(consultorio);
    }
}
