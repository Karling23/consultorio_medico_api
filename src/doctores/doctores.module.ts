import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctoresService } from './doctores.service';
import { DoctoresController } from './doctores.controller';
import { Doctor } from './doctor.entity';
import { CitaMedica } from '../citas-medicas/cita-medica.entity';
import { DoctoresConsultorio } from '../doctoresConsultorios/doctores-consultorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, CitaMedica, DoctoresConsultorio])],
  controllers: [DoctoresController],
  providers: [DoctoresService],
})
export class DoctoresModule {}
