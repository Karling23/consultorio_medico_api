import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConsultoriosService } from './consultorios.service';
import { ConsultoriosController } from './consultorios.controller';
import { Consultorio } from './consultorio.entity';
import { CitaMedica } from '../citas-medicas/cita-medica.entity';
import { DoctoresConsultorio } from '../doctoresConsultorios/doctores-consultorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consultorio, CitaMedica, DoctoresConsultorio])],
  controllers: [ConsultoriosController],
  providers: [ConsultoriosService],
})
export class ConsultoriosModule {} 
