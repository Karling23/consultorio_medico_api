import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadesController } from './especialidades.controller';
import { EspecialidadesService } from './especialidades.service';
import { Especialidad } from './especialidad.entity';
import { Doctor } from '../doctores/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad, Doctor])],
  controllers: [EspecialidadesController],
  providers: [EspecialidadesService],
})
export class EspecialidadesModule {}
