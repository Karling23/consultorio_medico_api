import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { QueryDto } from 'src/common/dto/querry.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const hashedPassword = await bcrypt.hash(createUsuarioDto.password, 10);

        const usuario = this.usuarioRepository.create({
        nombre_usuario: createUsuarioDto.nombre_usuario,
        password: hashedPassword,
        rol: createUsuarioDto.rol || 'paciente',
        });

        return this.usuarioRepository.save(usuario);
    }

    async findAll(
    queryDto: QueryDto,
    isActive?: boolean,
    ): Promise<Pagination<Usuario> | null> {
    try {
        const { page, limit, search, searchField, sort, order } = queryDto;

        const queryBuilder =
        this.usuarioRepository.createQueryBuilder('usuario');

        // 🔹 Búsqueda
        if (search) {
            if (searchField) {
                switch (searchField) {
                case 'nombre_usuario':
                    queryBuilder.andWhere(
                    'usuario.nombre_usuario ILIKE :search',
                    { search: `%${search}%` },
                    );
                    break;

                case 'rol':
                    queryBuilder.andWhere(
                    'usuario.rol ILIKE :search',
                    { search: `%${search}%` },
                    );
                    break;

                default:
                    queryBuilder.andWhere(
                    'usuario.nombre_usuario ILIKE :search',
                    { search: `%${search}%` },
                    );
                }
            } else {
                // 🔹 búsqueda por defecto
                queryBuilder.andWhere(
                'usuario.nombre_usuario ILIKE :search',
                { search: `%${search}%` },
                );
            }
        }

        const allowedSortFields = [
            'nombre_usuario',
            'fecha_creacion',
            'rol',
        ];

        // 🔹 Ordenamiento dinámico
        if (sort) {
        queryBuilder.orderBy(
            `usuario.${sort}`,
            (order ?? 'ASC') as 'ASC' | 'DESC',
        );
        }

        // 🔹 Paginación
        return await paginate<Usuario>(queryBuilder, {
        page,
        limit,
        });
    } catch (error) {
        console.error('Error retrieving usuarios:', error);
        return null;
    }
    }


    async findOne(id: number): Promise<Usuario | null> {
        return this.usuarioRepository.findOne({
        where: { id_usuario: id },
        });
    }

    async findByNombreUsuario(
        nombre_usuario: string,
    ): Promise<Usuario | null> {
        return this.usuarioRepository.findOne({
        where: { nombre_usuario },
        });
    }

    async update(
        id: number,
        updateUsuarioDto: UpdateUsuarioDto,
    ): Promise<Usuario | null> {
        const usuario = await this.findOne(id);
        if (!usuario) return null;

        if (updateUsuarioDto.password) {
        updateUsuarioDto.password = await bcrypt.hash(
            updateUsuarioDto.password,
            10,
        );
        }

        Object.assign(usuario, updateUsuarioDto);
        return this.usuarioRepository.save(usuario);
    }

    async remove(id: number): Promise<Usuario | null> {
        const usuario = await this.findOne(id);
        if (!usuario) return null;

        return this.usuarioRepository.remove(usuario);
    }

    async updateProfile(id: number, filename: string): Promise<Usuario | null> {
        try {
        const user = await this.findOne(id);
        if (!user) return null;

        user.profile = filename;
        return await this.usuarioRepository.save(user);
        } catch (err) {
        console.error('Error updating user profile image:', err);
        return null;
        }
    }
}
