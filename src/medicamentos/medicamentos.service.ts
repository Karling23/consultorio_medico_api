import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicamento } from './medicamento.entity';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { QueryDto } from 'src/common/dto/querry.dto';

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

    async findAll(
    query: QueryDto,
    ): Promise<Pagination<Medicamento> | null> {
    try {
        const { page, limit, search, searchField, sort, order } = query;

        const qb = this.medicamentoRepository.createQueryBuilder('medicamento');

        if (search) {
        const allowedSearchFields = ['nombre', 'descripcion'];

        if (searchField && allowedSearchFields.includes(searchField)) {
            qb.andWhere(
            `medicamento.${searchField} ILIKE :search`,
            { search: `%${search}%` },
            );
        } else {
            qb.andWhere(
            `
            medicamento.nombre ILIKE :search
            OR medicamento.descripcion ILIKE :search
            `,
            { search: `%${search}%` },
            );
        }
        }

        const allowedSortFields = ['id_medicamento', 'nombre'];

        if (sort && allowedSortFields.includes(sort)) {
        qb.orderBy(
            `medicamento.${sort}`,
            (order ?? 'ASC') as 'ASC' | 'DESC',
        );
        }

        return await paginate<Medicamento>(qb, {
        page,
        limit,
        });
    } catch (error) {
        console.error('Error retrieving medicamentos:', error);
        return null;
    }
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
