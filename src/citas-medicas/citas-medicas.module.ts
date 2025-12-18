import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CitasMedicasService } from './citas-medicas.service';
import { CitasMedicasController } from './citas-medicas.controller';
import { CitaMedica } from './cita-medica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitaMedica])],
  controllers: [CitasMedicasController],
  providers: [CitasMedicasService],
})
export class CitasMedicasModule {}