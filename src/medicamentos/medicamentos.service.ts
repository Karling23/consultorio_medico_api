import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Medicamento } from './medicamento.entity';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';

@Injectable()
export class MedicamentosService {
    constructor(
        @InjectRepository(Medicamento)
        private readonly medicamentoRepository: Repository<Medicamento>,
    ) {}

    async create(
        createDto: CreateMedicamentoDto,
    ): Promise<Medicamento> {
        const medicamento = this.medicamentoRepository.create(createDto);
        return this.medicamentoRepository.save(medicamento);
    }

    async findAll(): Promise<Medicamento[]> {
        return this.medicamentoRepository.find();
    }

    async findOne(id: number): Promise<Medicamento | null> {
        return this.medicamentoRepository.findOne({
        where: { id_medicamento: id },
        });
    }

    async update(
        id: number,
        updateDto: UpdateMedicamentoDto,
    ): Promise<Medicamento | null> {
        const medicamento = await this.findOne(id);
        if (!medicamento) return null;

        Object.assign(medicamento, updateDto);
        return this.medicamentoRepository.save(medicamento);
    }

    async remove(id: number): Promise<Medicamento | null> {
        const medicamento = await this.findOne(id);
        if (!medicamento) return null;

        return this.medicamentoRepository.remove(medicamento);
    }
}
