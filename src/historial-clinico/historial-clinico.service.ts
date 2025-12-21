import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HistorialClinico } from './schemas/historial-clinico.schema';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { QueryDto } from 'src/common/dto/querry.dto';

@Injectable()
export class HistorialClinicoService {
    constructor(
        @InjectModel(HistorialClinico.name)
        private readonly historialModel: Model<HistorialClinico>,
    ) {}

    async create(dto: CreateHistorialClinicoDto) {
        return this.historialModel.create(dto);
    }

    async findAll(query: QueryDto) {
        const {
        page = 1,
        limit = 10,
        search,
        searchField,
        sort,
        order,
        } = query;

        const filter: any = {};

        /* 🔍 SEARCH */
        if (search) {
        const allowedFields = [
            'diagnostico',
            'tratamiento',
            'observaciones',
        ];

        if (searchField && allowedFields.includes(searchField)) {
            filter[searchField] = { $regex: search, $options: 'i' };
        } else {
            filter.$or = allowedFields.map(field => ({
            [field]: { $regex: search, $options: 'i' },
            }));
        }
        }

        /* 🔃 SORT */
        const sortOptions: any = {};
        if (sort) {
        sortOptions[sort] = order === 'DESC' ? -1 : 1;
        }

        const skip = (page - 1) * limit;

        const [items, total] = await Promise.all([
        this.historialModel
            .find(filter)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit)
            .exec(),
        this.historialModel.countDocuments(filter),
        ]);

        return {
        items,
        meta: {
            totalItems: total,
            itemCount: items.length,
            itemsPerPage: limit,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        },
        };
    }

    async findOne(id: string) {
        const historial = await this.historialModel.findById(id);
        if (!historial) {
        throw new NotFoundException('Historial clínico no encontrado');
        }
        return historial;
    }

    async update(id: string, dto: UpdateHistorialClinicoDto) {
        const historial = await this.historialModel.findByIdAndUpdate(
        id,
        dto,
        { new: true },
        );

        if (!historial) {
        throw new NotFoundException('Historial clínico no encontrado');
        }

        return historial;
    }

    async remove(id: string) {
        const historial = await this.historialModel.findByIdAndDelete(id);
        if (!historial) {
        throw new NotFoundException('Historial clínico no encontrado');
        }
        return historial;
    }
}
