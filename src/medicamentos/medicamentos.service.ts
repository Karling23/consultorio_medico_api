import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medicamento } from './schemas/medicamento.schema';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { QueryDto } from 'src/common/dto/querry.dto';

@Injectable()
export class MedicamentosService {
    constructor(
        @InjectModel(Medicamento.name)
        private readonly medicamentoModel: Model<Medicamento>,
    ) {}

    async create(dto: CreateMedicamentoDto): Promise<Medicamento> {
        return this.medicamentoModel.create(dto);
    }

    async findAll(query: QueryDto) {
        const {
        page = 1,
        limit = 10,
        search,
        searchField,
        sort = 'createdAt',
        order = 'ASC',
        } = query;

        const filter: any = {};

        if (search) {
        if (searchField) {
            filter[searchField] = { $regex: search, $options: 'i' };
        } else {
            filter.$or = [
            { nombre: { $regex: search, $options: 'i' } },
            { descripcion: { $regex: search, $options: 'i' } },
            ];
        }
        }

        const skip = (page - 1) * limit;
        const sortOrder = order === 'DESC' ? -1 : 1;

        const [items, totalItems] = await Promise.all([
        this.medicamentoModel
            .find(filter)
            .sort({ [sort]: sortOrder })
            .skip(skip)
            .limit(limit)
            .exec(),
        this.medicamentoModel.countDocuments(filter),
        ]);

        return {
        items,
        meta: {
            totalItems,
            itemCount: items.length,
            itemsPerPage: limit,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
        },
        };
    }

    async findOne(id: string): Promise<Medicamento | null> {
        return this.medicamentoModel.findById(id).exec();
    }

    async update(
        id: string,
        dto: UpdateMedicamentoDto,
    ): Promise<Medicamento | null> {
        return this.medicamentoModel
        .findByIdAndUpdate(id, dto, { new: true })
        .exec();
    }

    async remove(id: string): Promise<Medicamento | null> {
        return this.medicamentoModel.findByIdAndDelete(id).exec();
    }
}
