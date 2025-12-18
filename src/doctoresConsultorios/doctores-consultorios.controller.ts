import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctoresConsultoriosService } from './doctores-consultorios.service';
import { CreateDoctoresConsultorioDto } from './dto/create-doctores-consultorio.dto';
import { UpdateDoctoresConsultorioDto } from './dto/update-doctores-consultorio.dto';

@Controller('doctoresConsultorios')
export class DoctoresConsultoriosController {
  constructor(private readonly doctoresConsultoriosService: DoctoresConsultoriosService) {}

  @Post()
  create(@Body() createDoctoresConsultorioDto: CreateDoctoresConsultorioDto) {
    return this.doctoresConsultoriosService.create(createDoctoresConsultorioDto);
  }

  @Get()
  findAll() {
    return this.doctoresConsultoriosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctoresConsultoriosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctoresConsultorioDto: UpdateDoctoresConsultorioDto) {
    return this.doctoresConsultoriosService.update(+id, updateDoctoresConsultorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctoresConsultoriosService.remove(+id);
  }
}
