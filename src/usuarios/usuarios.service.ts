import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

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
        rol: createUsuarioDto.rol,
        });

        return this.usuarioRepository.save(usuario);
    }

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
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
}
