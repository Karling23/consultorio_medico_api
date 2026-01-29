import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './usuario.entity';
import { Doctor } from '../doctores/doctor.entity';
import { Paciente } from '../pacientes/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Doctor, Paciente])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
