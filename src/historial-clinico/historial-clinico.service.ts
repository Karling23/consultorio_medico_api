import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HistorialClinico } from './historial-clinico.entity';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';

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

    async findAll(): Promise<HistorialClinico[]> {
        return this.historialRepository.find({
        relations: ['cita'],
        });
    }

    async findOne(id: number): Promise<HistorialClinico | null> {
        return this.historialRepository.findOne({
        where: { id_historial: id },
        relations: ['cita'],
        });
    }

    async update(
        id: number,
        updateDto: UpdateHistorialClinicoDto,
    ): Promise<HistorialClinico | null> {
        const historial = await this.findOne(id);
        if (!historial) return null;

        Object.assign(historial, updateDto);
        return this.historialRepository.save(historial);
    }

    async remove(id: number): Promise<HistorialClinico | null> {
        const historial = await this.findOne(id);
        if (!historial) return null;

        return this.historialRepository.remove(historial);
    }
}
