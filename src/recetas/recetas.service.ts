import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Receta } from './receta.entity';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>,
  ) {}

  async create(createRecetaDto: CreateRecetaDto): Promise<Receta> {
    const nuevaReceta = this.recetaRepository.create(createRecetaDto);
    return await this.recetaRepository.save(nuevaReceta);
  }

  async findAll(query: { page: number; limit: number; search?: string; searchField?: string; sort?: string; order?: 'ASC' | 'DESC' }): Promise<Pagination<Receta>> {
    const { page, limit, search, searchField, sort, order } = query;

    const qb = this.recetaRepository.createQueryBuilder('receta');

    if (search) {
      // Recetas no tiene campos de texto obvios, se deja vacio o se puede implementar logica especial
      // const allowedSearchFields = []; 
      // if (searchField && allowedSearchFields.includes(searchField)) { ... }
    }

    if (sort) {
      qb.orderBy(`receta.${sort}`, order === 'DESC' ? 'DESC' : 'ASC');
    } else {
      qb.orderBy('receta.id_receta', 'DESC');
    }

    return paginate<Receta>(qb, { page, limit });
  }

  async findOne(id: number): Promise<Receta> {
    const receta = await this.recetaRepository.findOneBy({ id_receta: id });
    if (!receta) {
      throw new NotFoundException(`Receta con ID ${id} no encontrada`);
    }
    return receta;
  }

  async update(id: number, updateRecetaDto: UpdateRecetaDto): Promise<Receta> {
    const receta = await this.findOne(id);
    this.recetaRepository.merge(receta, updateRecetaDto);
    return await this.recetaRepository.save(receta);
  }

  async remove(id: number): Promise<void> {
    const receta = await this.findOne(id);
    await this.recetaRepository.remove(receta);
  }
}
