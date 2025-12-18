import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctoresService } from './doctores.service';
import { DoctoresController } from './doctores.controller';
import { Doctor } from './doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  controllers: [DoctoresController],
  providers: [DoctoresService],
})
export class DoctoresModule {}
