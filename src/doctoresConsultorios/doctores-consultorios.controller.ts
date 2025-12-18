import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { DoctoresConsultoriosService } from './doctores-consultorios.service';
import { CreateDoctoresConsultorioDto } from './dto/create-doctores-consultorio.dto';
import { UpdateDoctoresConsultorioDto } from './dto/update-doctores-consultorio.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DoctoresConsultorio } from './doctores-consultorio.entity';

@Controller('doctoresConsultorios')
export class DoctoresConsultoriosController {
  constructor(private readonly doctoresConsultoriosService: DoctoresConsultoriosService) {}

  @Post()
  create(@Body() createDoctoresConsultorioDto: CreateDoctoresConsultorioDto) {
    return this.doctoresConsultoriosService.create(createDoctoresConsultorioDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<DoctoresConsultorio>> {
    limit = limit > 100 ? 100 : limit;
    return this.doctoresConsultoriosService.findAll({
      page,
      limit,
      route: 'http://localhost:3000/doctoresConsultorios',
    });
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
