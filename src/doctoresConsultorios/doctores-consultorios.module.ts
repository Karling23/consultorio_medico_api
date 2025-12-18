import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctoresConsultoriosService } from './doctores-consultorios.service';
import { DoctoresConsultoriosController } from './doctores-consultorios.controller';
import { DoctoresConsultorio } from './doctores-consultorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctoresConsultorio])],
  controllers: [DoctoresConsultoriosController],
  providers: [DoctoresConsultoriosService],
})
export class DoctoresConsultoriosModule {}
