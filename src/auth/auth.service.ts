import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto): Promise<string | null> {
        try {
        const user: Usuario | null = await this.usuariosService.findByNombreUsuario(loginDto.username);
        if (!user) return null;
        const isValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isValid) return null;
        const payload = { id: user.id_usuario, username: user.nombre_usuario };
        return this.jwtService.sign(payload);
        } catch (err) {
        console.error('Unexpected login error:', err);
        return null;
        }
    }

    async register(createUsuarioDto: CreateUsuarioDto): Promise<string | null> {
        const user = await this.usuariosService.create(createUsuarioDto);
        if (!user) return null;
        const payload = { id: user.id_usuario, username: user.nombre_usuario };
        return this.jwtService.sign(payload);
    }
}
