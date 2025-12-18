import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConsultoriosService } from './consultorios.service';
import { ConsultoriosController } from './consultorios.controller';
import { Consultorio } from './consultorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consultorio])],
  controllers: [ConsultoriosController],
  providers: [ConsultoriosService],
})
export class ConsultoriosModule {} 