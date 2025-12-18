import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
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

  async findAll(options: IPaginationOptions): Promise<Pagination<Receta>> {
    return paginate<Receta>(this.recetaRepository, options);
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
