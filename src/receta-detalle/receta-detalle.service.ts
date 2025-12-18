import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RecetaDetalle } from './receta-detalle.entity';
import { CreateRecetaDetalleDto } from './dto/create-receta-detalle.dto';
import { UpdateRecetaDetalleDto } from './dto/update-receta-detalle.dto';

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

    async findAll(): Promise<RecetaDetalle[]> {
        return this.recetaDetalleRepository.find();
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
