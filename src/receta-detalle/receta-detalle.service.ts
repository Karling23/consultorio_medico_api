import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RecetaDetalle } from './receta-detalle.entity';
import { CreateRecetaDetalleDto } from './dto/create-receta-detalle.dto';
import { UpdateRecetaDetalleDto } from './dto/update-receta-detalle.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { QueryDto } from 'src/common/dto/querry.dto';

@Injectable()
export class RecetaDetalleService {
    constructor(
        @InjectRepository(RecetaDetalle)
        private readonly recetaDetalleRepository: Repository<RecetaDetalle>,
    ) {}

    async create(
        createDto: CreateRecetaDetalleDto,
    ): Promise<RecetaDetalle> {
        const detalle = this.recetaDetalleRepository.create(createDto);
        return this.recetaDetalleRepository.save(detalle);
    }

    async findAll(
    query: QueryDto,
    ): Promise<Pagination<RecetaDetalle> | null> {
    try {
        const { page, limit, search, searchField, sort, order } = query;

        const qb =
        this.recetaDetalleRepository.createQueryBuilder('detalle');

        if (search) {
        const allowedSearchFields = [
            'medicamento',
            'dosis',
            'frecuencia',
            'duracion',
        ];

        if (searchField && allowedSearchFields.includes(searchField)) {
            qb.andWhere(
            `detalle.${searchField} ILIKE :search`,
            { search: `%${search}%` },
            );
        } else {
            qb.andWhere(
            `
            detalle.medicamento ILIKE :search
            OR detalle.dosis ILIKE :search
            OR detalle.frecuencia ILIKE :search
            OR detalle.duracion ILIKE :search
            `,
            { search: `%${search}%` },
            );
        }
        }

        const allowedSortFields = [
        'id_receta_detalle',
        'medicamento',
        ];

        if (sort && allowedSortFields.includes(sort)) {
        qb.orderBy(
            `detalle.${sort}`,
            (order ?? 'ASC') as 'ASC' | 'DESC',
        );
        }

        return await paginate<RecetaDetalle>(qb, {
        page,
        limit,
        });
    } catch (error) {
        console.error('Error retrieving receta detalle:', error);
        return null;
    }
    }


    async findOne(id: number): Promise<RecetaDetalle | null> {
        return this.recetaDetalleRepository.findOne({
        where: { id_receta_detalle: id },
        });
    }

    async update(
        id: number,
        updateDto: UpdateRecetaDetalleDto,
    ): Promise<RecetaDetalle | null> {
        const detalle = await this.findOne(id);
        if (!detalle) return null;

        Object.assign(detalle, updateDto);
        return this.recetaDetalleRepository.save(detalle);
    }

    async remove(id: number): Promise<RecetaDetalle | null> {
        const detalle = await this.findOne(id);
        if (!detalle) return null;

        return this.recetaDetalleRepository.remove(detalle);
    }
}
