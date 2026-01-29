import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { Paciente } from './paciente.entity'; 
import { CitaMedica } from '../citas-medicas/cita-medica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, CitaMedica])],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {} 
