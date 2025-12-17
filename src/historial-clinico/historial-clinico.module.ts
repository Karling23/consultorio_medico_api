import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistorialClinicoService } from './historial-clinico.service';
import { HistorialClinicoController } from './historial-clinico.controller';
import { HistorialClinico } from './historial-clinico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialClinico])],
  controllers: [HistorialClinicoController],
  providers: [HistorialClinicoService],
})
export class HistorialClinicoModule {}
