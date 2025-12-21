import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HistorialClinicoService } from './historial-clinico.service';
import { HistorialClinicoController } from './historial-clinico.controller';
import {
  HistorialClinico,
  HistorialClinicoSchema,
} from './schemas/historial-clinico.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HistorialClinico.name, schema: HistorialClinicoSchema },
    ]),
  ],
  controllers: [HistorialClinicoController],
  providers: [HistorialClinicoService],
})
export class HistorialClinicoModule {}
