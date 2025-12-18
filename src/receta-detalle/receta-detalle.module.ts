import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecetaDetalleService } from './receta-detalle.service';
import { RecetaDetalleController } from './receta-detalle.controller';
import { RecetaDetalle } from './receta-detalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecetaDetalle])],
  controllers: [RecetaDetalleController],
  providers: [RecetaDetalleService],
})
export class RecetaDetalleModule {}
