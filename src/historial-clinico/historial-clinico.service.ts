import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialClinico } from './historial-clinico.entity';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { QueryDto } from 'src/common/dto/querry.dto';

@Injectable()
export class HistorialClinicoService {
    constructor(
        @InjectRepository(HistorialClinico)
        private readonly historialRepository: Repository<HistorialClinico>,
    ) {}

    async create(
        createDto: CreateHistorialClinicoDto,
    ): Promise<HistorialClinico> {
        const historial = this.historialRepository.create(createDto);
        return this.historialRepository.save(historial);
    }

    async findAll(
    query: QueryDto,
    ): Promise<Pagination<HistorialClinico> | null> {
    try {
        const { page, limit, search, searchField, sort, order } = query;

        const qb = this.historialRepository.createQueryBuilder('historial');

        /* 🔍 SEARCH */
        if (search) {
        const allowedSearchFields = [
            'diagnostico',
            'tratamiento',
            'observaciones',
        ];

        if (searchField && allowedSearchFields.includes(searchField)) {
            qb.andWhere(
            `historial.${searchField} ILIKE :search`,
            { search: `%${search}%` },
            );
        } else {
            // búsqueda por defecto
            qb.andWhere(
            `
            historial.diagnostico ILIKE :search
            OR historial.tratamiento ILIKE :search
            OR historial.observaciones ILIKE :search
            `,
            { search: `%${search}%` },
            );
        }
        }

        /* 🔃 SORT */
        const allowedSortFields = [
        'id_historial',
        'id_cita',
        ];

        if (sort && allowedSortFields.includes(sort)) {
        qb.orderBy(
            `historial.${sort}`,
            (order ?? 'ASC') as 'ASC' | 'DESC',
        );
        }

        /* 📄 PAGINACIÓN */
        return await paginate<HistorialClinico>(qb, {
        page,
        limit,
        });
    } catch (error) {
        console.error('Error retrieving historial clínico:', error);
        return null;
    }
    }

    async findOne(id: number): Promise<HistorialClinico | null> {
        return this.historialRepository.findOne({
        where: { id_historial: id }
        });
    }

    async update(
        id: number,
        updateDto: UpdateHistorialClinicoDto,
    ): Promise<HistorialClinico | null> {
        const historial = await this.findOne(id);
        if (!historial) {
            throw new NotFoundException('Historial clínico no encontrado');
        }

        Object.assign(historial, updateDto);
        return this.historialRepository.save(historial);
    }

    async remove(id: number): Promise<HistorialClinico | null> {
        const historial = await this.findOne(id);
        if (!historial) return null;

        return this.historialRepository.remove(historial);
    }
}
